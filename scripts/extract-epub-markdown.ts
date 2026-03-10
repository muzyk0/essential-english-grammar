import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

type CliOptions = {
  additionalOnly: boolean
  includeAdditional: boolean
  outDir: string
  unitNumbers: Set<number>
}

type AdditionalExercisePageSource = {
  htmlPath: string
  order: number
}

type AdditionalExercisePageSummary = {
  coverage: string[]
  coverageInferred: boolean
  fileName: string
  order: number
  popupExercises: number[]
}

type UnitSource = {
  exercisesPath: string
  number: number
  theoryPath: string
  title: string
}

type ExerciseAnswers = {
  answers: Array<{ answer: string; item: number }>
  heading: string
  prompt: string
}

const rootDir = process.cwd()
const epubDir = path.join(rootDir, 'references', 'EPUB', 'OEBPS')
const htmlDir = path.join(epubDir, 'html')
const tocPath = path.join(epubDir, 'toc.ncx')
const defaultOutDir = path.join(rootDir, 'references', 'markdown')

function decodeHtml(text: string): string {
  const namedEntities: Record<string, string> = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
  }

  return text.replace(/&(#x?[0-9a-fA-F]+|\w+);/g, (_match, entity: string) => {
    if (entity.startsWith('#x') || entity.startsWith('#X')) {
      const codePoint = Number.parseInt(entity.slice(2), 16)
      return Number.isNaN(codePoint) ? _match : String.fromCodePoint(codePoint)
    }

    if (entity.startsWith('#')) {
      const codePoint = Number.parseInt(entity.slice(1), 10)
      return Number.isNaN(codePoint) ? _match : String.fromCodePoint(codePoint)
    }

    return namedEntities[entity] ?? _match
  })
}

function normalizeText(text: string): string {
  return decodeHtml(text)
    .replaceAll('\u00A0', ' ')
    .replace(/\s+/g, ' ')
    .replace(/([“‘"])\s+/g, '$1')
    .replace(/\s+([’'])/g, '$1')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/([([{])\s+/g, '$1')
    .replace(/\s+([)\]}])/g, '$1')
    .trim()
}

function parseArgs(argv: string[]): CliOptions {
  let additionalOnly = false
  let includeAdditional = false
  const unitNumbers = new Set<number>()
  let outDir = defaultOutDir

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index]

    if (argument === '--additional') {
      includeAdditional = true
      continue
    }

    if (argument === '--additional-only') {
      additionalOnly = true
      includeAdditional = true
      continue
    }

    if ((argument === '--unit' || argument === '-u') && argv[index + 1]) {
      for (const chunk of argv[index + 1].split(',')) {
        const unitNumber = Number.parseInt(chunk, 10)

        if (Number.isInteger(unitNumber) && unitNumber > 0) {
          unitNumbers.add(unitNumber)
        }
      }

      index += 1
      continue
    }

    if (argument.startsWith('--unit=')) {
      for (const chunk of argument.slice('--unit='.length).split(',')) {
        const unitNumber = Number.parseInt(chunk, 10)

        if (Number.isInteger(unitNumber) && unitNumber > 0) {
          unitNumbers.add(unitNumber)
        }
      }

      continue
    }

    if (argument === '--out-dir' && argv[index + 1]) {
      outDir = path.resolve(rootDir, argv[index + 1])
      index += 1
      continue
    }

    if (argument.startsWith('--out-dir=')) {
      outDir = path.resolve(rootDir, argument.slice('--out-dir='.length))
    }
  }

  return { additionalOnly, includeAdditional, outDir, unitNumbers }
}

function parseUnitsFromToc(tocXml: string): UnitSource[] {
  const units = new Map<number, UnitSource>()
  const unitPattern = /<navLabel><text>Unit\s+(\d+):\s*([\s\S]*?)<\/text><\/navLabel><content src="([^"]+)"/g

  for (const match of tocXml.matchAll(unitPattern)) {
    const number = Number.parseInt(match[1], 10)

    if (!Number.isInteger(number)) {
      continue
    }

    const title = normalizeText(decodeHtml(match[2]))
    const theoryPath = match[3].split('#')[0]
    const exercisesPath = theoryPath.replace('P001.html', 'P002.html')

    units.set(number, { exercisesPath, number, theoryPath, title })
  }

  return [...units.values()].sort((left, right) => left.number - right.number)
}

async function listAdditionalExercisePages(): Promise<AdditionalExercisePageSource[]> {
  const fileNames = (await readdir(htmlDir))
    .filter((fileName) => /^ESSB01ADEXP\d{3}\.html$/.test(fileName))
    .sort()

  return fileNames.map((fileName) => ({
    htmlPath: path.posix.join('html', fileName),
    order: Number.parseInt(fileName.match(/(\d{3})/)?.[1] ?? '0', 10),
  }))
}

function getAttribute(element: {
  getAttribute(name: string): string | null
}, name: string): string {
  return element.getAttribute(name) ?? ''
}

function hasAttribute(element: {
  getAttribute(name: string): string | null
}, name: string): boolean {
  return element.getAttribute(name) !== null
}

function isSkippedMainChild(element: {
  getAttribute(name: string): string | null
  tagName: string
}): boolean {
  const id = getAttribute(element, 'id')
  const style = getAttribute(element, 'style')

  if (['audio', 'img', 'script', 'style'].includes(element.tagName.toLowerCase())) {
    return true
  }

  if (style.includes('display:none')) {
    return true
  }

  if (
    id.startsWith('au') ||
    id.startsWith('popup') ||
    id.startsWith('start') ||
    /^n\d+$/.test(id)
  ) {
    return true
  }

  return [
    'data-au-activity',
    'data-au-button',
    'data-au-buttonset',
    'data-au-container',
    'data-displayact',
    'data-insideactivity',
    'data-popupbtn',
  ].some((attribute) => hasAttribute(element, attribute))
}

function filterBoilerplateLines(lines: string[], unitNumber: number): string[] {
  const filtered: string[] = []

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const previousLine = lines[index - 1]
    const nextLine = lines[index + 1]

    if (line === 'Exercises') {
      continue
    }

    if (line === 'Unit' && nextLine === String(unitNumber)) {
      continue
    }

    if (line === String(unitNumber) && previousLine === 'Unit') {
      continue
    }

    filtered.push(line)
  }

  return filtered
}

function dedupeLines(lines: string[]): string[] {
  const deduped: string[] = []

  for (const line of lines) {
    if (line === deduped[deduped.length - 1]) {
      continue
    }

    deduped.push(line)
  }

  return deduped
}

function finalizeTextParts(parts: string[]): string {
  const cleanedParts = parts
    .map((part) => normalizeText(part))
    .filter(Boolean)

  return normalizeText(dedupeLines(cleanedParts).join(' '))
}

function normalizeAnswerText(text: string): string {
  let tokens = normalizeText(text).split(' ').filter(Boolean)
  let changed = true

  while (changed) {
    changed = false
    const nextTokens: string[] = []

    for (let index = 0; index < tokens.length; ) {
      let repeatedSpan = 0
      const maxSpan = Math.min(12, Math.floor((tokens.length - index) / 2))

      for (let span = maxSpan; span >= 1; span -= 1) {
        let matches = true

        for (let offset = 0; offset < span; offset += 1) {
          if (tokens[index + offset] !== tokens[index + span + offset]) {
            matches = false
            break
          }
        }

        if (matches) {
          repeatedSpan = span
          break
        }
      }

      if (repeatedSpan > 0) {
        nextTokens.push(...tokens.slice(index, index + repeatedSpan))
        index += repeatedSpan * 2
        changed = true
        continue
      }

      nextTokens.push(tokens[index])
      index += 1
    }

    tokens = nextTokens
  }

  return tokens.join(' ')
}

async function extractMainLines(html: string, unitNumber: number): Promise<string[]> {
  const lines: string[] = []
  let currentChunk:
    | {
        parts: string[]
        skip: boolean
      }
    | undefined

  await new globalThis.HTMLRewriter()
    .on('.bgimg > div', {
      element(element) {
        const chunk = {
          parts: [] as string[],
          skip: isSkippedMainChild(element),
        }

        currentChunk = chunk
        element.onEndTag(() => {
          if (!currentChunk || currentChunk !== chunk) {
            return
          }

          if (!chunk.skip) {
            const line = finalizeTextParts(chunk.parts)

            if (line) {
              lines.push(line)
            }
          }

          currentChunk = undefined
        })
      },
      text(text) {
        currentChunk?.parts.push(text.text)
      },
    })
    .transform(new Response(html))
    .text()

  return dedupeLines(filterBoilerplateLines(lines, unitNumber))
}

function parseItemNumber(id: string, fallback: number): number {
  const match = id.match(/-(\d+)(?:[a-z])?$/i)

  if (!match) {
    return fallback
  }

  const item = Number.parseInt(match[1], 10)
  return Number.isInteger(item) ? item : fallback
}

function parseExerciseNumberFromHeading(heading: string): number | undefined {
  const match = heading.match(/Exercise\s+(\d+)/i)

  if (!match) {
    return undefined
  }

  const exerciseNumber = Number.parseInt(match[1], 10)
  return Number.isInteger(exerciseNumber) ? exerciseNumber : undefined
}

function upsertAnswer(
  section: { answers: Map<number, string> },
  item: number,
  answer: string,
) {
  if (!section.answers.has(item)) {
    section.answers.set(item, answer)
    return
  }

  const currentAnswer = section.answers.get(item)

  if (currentAnswer && currentAnswer !== answer) {
    section.answers.set(item, `${currentAnswer} / ${answer}`)
  }
}

async function extractExerciseSections(html: string): Promise<ExerciseAnswers[]> {
  const sections: ExerciseAnswers[] = []
  const sectionStack: Array<{
    answers: Map<number, string>
    heading: string
    prompt: string
  }> = []
  const captureStack: Array<{
    complete: (text: string) => void
    parts: string[]
  }> = []

  await new globalThis.HTMLRewriter()
    .on('[data-displayact]', {
      element(element) {
        const section = {
          answers: new Map<number, string>(),
          heading: '',
          prompt: '',
        }

        sectionStack.push(section)
        element.onEndTag(() => {
          const currentSection = sectionStack.pop()

          if (!currentSection) {
            return
          }

          if (!currentSection.prompt && currentSection.answers.size === 0) {
            return
          }

          sections.push({
            answers: [...currentSection.answers.entries()]
              .sort(([left], [right]) => left - right)
              .map(([item, answer]) => ({ answer, item })),
            heading:
              currentSection.heading ||
              `Exercise ${sections.length + 1}`,
            prompt: currentSection.prompt,
          })
        })
      },
    })
    .on('.exe', {
      element(element) {
        const section = sectionStack[sectionStack.length - 1]

        if (!section) {
          return
        }

        const capture = {
          complete: (text: string) => {
            section.heading = normalizeText(text)
          },
          parts: [] as string[],
        }

        captureStack.push(capture)
        element.onEndTag(() => {
          const currentCapture = captureStack.pop()

          if (!currentCapture) {
            return
          }

          currentCapture.complete(finalizeTextParts(currentCapture.parts))
        })
      },
      text(text) {
        captureStack[captureStack.length - 1]?.parts.push(text.text)
      },
    })
    .on('.rubric', {
      element(element) {
        const section = sectionStack[sectionStack.length - 1]

        if (!section) {
          return
        }

        const capture = {
          complete: (text: string) => {
            section.prompt = normalizeText(text)
          },
          parts: [] as string[],
        }

        captureStack.push(capture)
        element.onEndTag(() => {
          const currentCapture = captureStack.pop()

          if (!currentCapture) {
            return
          }

          currentCapture.complete(finalizeTextParts(currentCapture.parts))
        })
      },
      text(text) {
        captureStack[captureStack.length - 1]?.parts.push(text.text)
      },
    })
    .on('[data-ta-answer]', {
      element(element) {
        const section = sectionStack[sectionStack.length - 1]

        if (!section) {
          return
        }

        const id = getAttribute(element, 'id')
        const fallbackItem = section.answers.size + 1
        const item = parseItemNumber(id, fallbackItem)
        const capture = {
          complete: (text: string) => {
            const answer = normalizeAnswerText(text)

            if (answer) {
              upsertAnswer(section, item, answer)
            }
          },
          parts: [] as string[],
        }

        captureStack.push(capture)
        element.onEndTag(() => {
          const currentCapture = captureStack.pop()

          if (!currentCapture) {
            return
          }

          currentCapture.complete(finalizeTextParts(currentCapture.parts))
        })
      },
      text(text) {
        captureStack[captureStack.length - 1]?.parts.push(text.text)
      },
    })
    .on('[id]', {
      element(element) {
        const section = sectionStack[sectionStack.length - 1]

        if (!section) {
          return
        }

        const id = getAttribute(element, 'id')

        if (
          !/^(?:u\d+s\d+-\d+|p\d+s\d+-\d+|ESSB01ADEXP\d+s\d+-\d+[a-z]?)$/i.test(id) ||
          hasAttribute(element, 'contenteditable')
        ) {
          return
        }

        const item = parseItemNumber(id, section.answers.size + 1)
        const capture = {
          complete: (text: string) => {
            const answer = normalizeAnswerText(text)

            if (answer) {
              upsertAnswer(section, item, answer)
            }
          },
          parts: [] as string[],
        }

        captureStack.push(capture)
        element.onEndTag(() => {
          const currentCapture = captureStack.pop()

          if (!currentCapture) {
            return
          }

          currentCapture.complete(finalizeTextParts(currentCapture.parts))
        })
      },
      text(text) {
        captureStack[captureStack.length - 1]?.parts.push(text.text)
      },
    })
    .transform(new Response(html))
    .text()

  return sections
}

function stripHtmlComments(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, '')
}

function extractVisibleAdditionalExerciseNumbers(html: string): number[] {
  const visibleNumbers = new Set<number>()
  const source = stripHtmlComments(html)
  const buttonPattern = /<div id="popupBtnId(\d+)"[^>]*style="([^"]*)"[^>]*>/g

  for (const match of source.matchAll(buttonPattern)) {
    if (match[2].includes('display:none')) {
      continue
    }

    visibleNumbers.add(Number.parseInt(match[1], 10) + 1)
  }

  return [...visibleNumbers].sort((left, right) => left - right)
}

function extractAdditionalCoverage(lines: string[]): string[] {
  const coverageLines: string[] = []

  for (const line of lines) {
    if (!/^Units?\s+\d/.test(line)) {
      continue
    }

    for (const chunk of line.split(/(?=Units?\s+\d)/g)) {
      const normalizedChunk = normalizeText(chunk).replace(/,\s*$/g, '')

      if (normalizedChunk) {
        coverageLines.push(normalizedChunk)
      }
    }
  }

  return dedupeLines(coverageLines)
}

function filterSectionsByExercises(
  sections: ExerciseAnswers[],
  exerciseNumbers: number[],
): ExerciseAnswers[] {
  if (exerciseNumbers.length === 0) {
    return []
  }

  const allowedNumbers = new Set(exerciseNumbers)

  return sections.filter((section) => {
    const exerciseNumber = parseExerciseNumberFromHeading(section.heading)
    return exerciseNumber !== undefined && allowedNumbers.has(exerciseNumber)
  })
}

function toMarkdownList(lines: string[]): string {
  if (lines.length === 0) {
    return '_No text extracted._'
  }

  return lines.map((line) => `- ${line}`).join('\n')
}

function renderAnswerSections(sections: ExerciseAnswers[]): string {
  if (sections.length === 0) {
    return '_No structured answers found in popup markup._'
  }

  const blocks = sections.map((section) => {
    const answerLines =
      section.answers.length === 0
        ? '_No answer key detected for this exercise._'
        : section.answers.map(({ answer, item }) => `${item}. ${answer}`).join('\n')

    const prompt = section.prompt ? `${section.prompt}\n\n` : ''

    return `### ${section.heading}\n\n${prompt}${answerLines}`
  })

  return blocks.join('\n\n')
}

function renderUnitMarkdown(unit: UnitSource, theoryLines: string[], exerciseLines: string[], answerSections: ExerciseAnswers[]): string {
  const theorySource = path.posix.join('references/EPUB/OEBPS', unit.theoryPath)
  const exercisesSource = path.posix.join('references/EPUB/OEBPS', unit.exercisesPath)

  return `# Unit ${unit.number}: ${unit.title}

- Theory source: \`${theorySource}\`
- Exercises source: \`${exercisesSource}\`
- Generated from the fixed-layout EPUB for CLI review.

## Theory

${toMarkdownList(theoryLines)}

## Exercises

${toMarkdownList(exerciseLines)}

## Answer Key

${renderAnswerSections(answerSections)}
`
}

function renderAdditionalPageMarkdown(
  page: AdditionalExercisePageSource,
  lines: string[],
  coverage: string[],
  coverageInferred: boolean,
  popupExercises: number[],
  answerSections: ExerciseAnswers[],
): string {
  const source = path.posix.join('references/EPUB/OEBPS', page.htmlPath)
  const relatedUnits =
    coverage.length === 0 ? '_Not detected._' : coverage.map((line) => `\`${line}\``).join(', ')
  const relatedUnitsSuffix = coverageInferred ? ' (inferred from previous page)' : ''
  const popupSummary =
    popupExercises.length === 0 ? '_None on this page._' : popupExercises.join(', ')

  return `# Additional Exercises Page ${String(page.order).padStart(3, '0')}

- Source: \`${source}\`
- Related units: ${relatedUnits}${relatedUnitsSuffix}
- Popup answer exercises on this page: ${popupSummary}

## Content

${toMarkdownList(lines)}

## Answer Key

${renderAnswerSections(answerSections)}
`
}

function renderAdditionalIndex(pages: AdditionalExercisePageSummary[]): string {
  const lines = pages.map((page) => {
    const details: string[] = []

    if (page.coverage.length > 0) {
      const coverage = page.coverage.join('; ')
      details.push(page.coverageInferred ? `${coverage} (inferred)` : coverage)
    }

    if (page.popupExercises.length > 0) {
      details.push(`answer popups: ${page.popupExercises.join(', ')}`)
    }

    const suffix = details.length === 0 ? '' : ` — ${details.join(' | ')}`

    return `- [Page ${String(page.order).padStart(3, '0')}](./${page.fileName})${suffix}`
  })

  return `# Additional Exercises

Generated from \`references/EPUB/OEBPS/html/ESSB01ADEXP*.html\`.

## Pages

${lines.join('\n')}
`
}

function renderIndex(units: UnitSource[], includeAdditional: boolean): string {
  const lines = units.map(
    (unit) =>
      `- [Unit ${unit.number}: ${unit.title}](./unit-${String(unit.number).padStart(3, '0')}.md)`,
  )

  return `# EPUB Markdown Export

Generated from \`references/EPUB/OEBPS\`.

Run:

\`\`\`bash
bun run extract:markdown
bun run extract:markdown -- --unit 14
bun run extract:markdown -- --additional-only
\`\`\`

## Units

${lines.join('\n')}

## Additional Exercises

${includeAdditional ? '- [Browse additional exercises](./additional-exercises/README.md)' : '_Not exported in this run._'}
`
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  if (typeof globalThis.HTMLRewriter === 'undefined') {
    throw new Error('This script requires Bun because it uses HTMLRewriter.')
  }

  const options = parseArgs(process.argv.slice(2))
  const tocXml = await readFile(tocPath, 'utf8')
  const availableUnits = parseUnitsFromToc(tocXml)
  const shouldExportUnits = !options.additionalOnly
  const shouldExportAdditional =
    options.additionalOnly || options.includeAdditional || options.unitNumbers.size === 0
  const units = !shouldExportUnits
    ? []
    : options.unitNumbers.size === 0
      ? availableUnits
      : availableUnits.filter((unit) => options.unitNumbers.has(unit.number))

  if (shouldExportUnits && units.length === 0) {
    throw new Error('No matching units found in toc.ncx.')
  }

  await mkdir(options.outDir, { recursive: true })

  if (shouldExportUnits) {
    for (const unit of units) {
      const theoryFilePath = path.join(epubDir, unit.theoryPath)
      const exercisesFilePath = path.join(epubDir, unit.exercisesPath)

      if (!(await fileExists(theoryFilePath))) {
        throw new Error(`Missing theory source: ${theoryFilePath}`)
      }

      if (!(await fileExists(exercisesFilePath))) {
        throw new Error(`Missing exercises source: ${exercisesFilePath}`)
      }

      const [theoryHtml, exercisesHtml] = await Promise.all([
        readFile(theoryFilePath, 'utf8'),
        readFile(exercisesFilePath, 'utf8'),
      ])

      const [theoryLines, exerciseLines, answerSections] = await Promise.all([
        extractMainLines(theoryHtml, unit.number),
        extractMainLines(exercisesHtml, unit.number),
        extractExerciseSections(exercisesHtml),
      ])
      const markdown = renderUnitMarkdown(unit, theoryLines, exerciseLines, answerSections)
      const outputFilePath = path.join(
        options.outDir,
        `unit-${String(unit.number).padStart(3, '0')}.md`,
      )

      await writeFile(outputFilePath, markdown, 'utf8')
    }
  }

  let additionalPagesCount = 0

  if (shouldExportAdditional) {
    const additionalPages = await listAdditionalExercisePages()
    const additionalOutDir = path.join(options.outDir, 'additional-exercises')
    const pageSummaries: AdditionalExercisePageSummary[] = []
    let previousCoverage: string[] = []

    await mkdir(additionalOutDir, { recursive: true })

    for (const page of additionalPages) {
      const pageFilePath = path.join(epubDir, page.htmlPath)

      if (!(await fileExists(pageFilePath))) {
        throw new Error(`Missing additional exercises source: ${pageFilePath}`)
      }

      const pageHtml = await readFile(pageFilePath, 'utf8')
      const popupExercises = extractVisibleAdditionalExerciseNumbers(pageHtml)
      const [lines, answerSections] = await Promise.all([
        extractMainLines(pageHtml, -1),
        extractExerciseSections(pageHtml),
      ])
      const extractedCoverage = extractAdditionalCoverage(lines)
      const coverage = extractedCoverage.length > 0 ? extractedCoverage : previousCoverage
      const coverageInferred = extractedCoverage.length === 0 && previousCoverage.length > 0
      const filteredAnswers = filterSectionsByExercises(answerSections, popupExercises)
      const fileName = `page-${String(page.order).padStart(3, '0')}.md`
      const markdown = renderAdditionalPageMarkdown(
        page,
        lines,
        coverage,
        coverageInferred,
        popupExercises,
        filteredAnswers,
      )

      await writeFile(path.join(additionalOutDir, fileName), markdown, 'utf8')

      pageSummaries.push({
        coverage,
        coverageInferred,
        fileName,
        order: page.order,
        popupExercises,
      })

      if (extractedCoverage.length > 0) {
        previousCoverage = extractedCoverage
      }
    }

    await writeFile(
      path.join(additionalOutDir, 'README.md'),
      renderAdditionalIndex(pageSummaries),
      'utf8',
    )

    additionalPagesCount = additionalPages.length
  }

  await writeFile(
    path.join(options.outDir, 'README.md'),
    renderIndex(units, shouldExportAdditional),
    'utf8',
  )

  console.log(
    `Generated ${units.length} unit file(s) and ${additionalPagesCount} additional-exercise page(s) in ${path.relative(rootDir, options.outDir)}`,
  )
}

await main()
