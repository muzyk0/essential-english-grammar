import { access, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

type CliOptions = {
  outDir: string
}

type TocUnit = {
  number: number
  title: string
  theoryPath: string
  exercisesPath: string
}

type UnitManifest = {
  unitNumber: number
  title: string
  sectionTitle?: string
  chapterPath?: string
  theoryPath: string
  exercisesPath: string
  appUnitPath: string
  appUnitExists: boolean
  relatedAdditionalExercisePages: number[]
}

type ReviewPackCandidate = {
  path: string
  overlapUnits: number[]
  candidateType: 'exact' | 'partial'
}

type AdditionalExerciseManifest = {
  pageNumber: number
  sourcePath: string
  coverage: string[]
  coverageInferred: boolean
  coveredUnitNumbers: number[]
  popupExercises: number[]
  reviewPackCandidates: ReviewPackCandidate[]
}

type MiscPageManifest = {
  title: string
  sourcePath: string
  pageNumber?: number
  sectionPath?: string
}

type StructureNode = {
  title?: string
  localPath?: string
  modelName?: string
  path?: string
  num?: string
  content?: StructureNode[]
}

type StructureFile = {
  book?: {
    content?: StructureNode[]
  }
}

type ReviewPackInfo = {
  path: string
  coversUnits: number[]
}

const rootDir = process.cwd()
const referencesDir = path.join(rootDir, 'references')
const epubRootDir = path.join(referencesDir, 'EPUB')
const epubDir = path.join(epubRootDir, 'OEBPS')
const htmlDir = path.join(epubDir, 'html')
const tocPath = path.join(epubDir, 'toc.ncx')
const structurePath = path.join(referencesDir, 'EPUB', 'structure.json')
const reviewPackDir = path.join(rootDir, 'src', 'data', 'review-packs')
const defaultOutDir = path.join(referencesDir, 'catalog')

function sanitizeOutDir(candidate: string): string {
  const resolved = path.resolve(rootDir, candidate || defaultOutDir)
  const relativeToReferences = path.relative(referencesDir, resolved)

  if (
    relativeToReferences === '' ||
    relativeToReferences.startsWith('..') ||
    path.isAbsolute(relativeToReferences) ||
    resolved === epubRootDir
  ) {
    return defaultOutDir
  }

  return resolved
}

function parseArgs(argv: string[]): CliOptions {
  let outDir = defaultOutDir

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index]

    if (argument === '--out-dir' && argv[index + 1]) {
      outDir = argv[index + 1]
      index += 1
      continue
    }

    if (argument.startsWith('--out-dir=')) {
      outDir = argument.slice('--out-dir='.length)
    }
  }

  return { outDir: sanitizeOutDir(outDir) }
}

function decodeHtml(text: string): string {
  const namedEntities: Record<string, string> = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
    ndash: '–',
    mdash: '—',
  }

  return text.replace(/&(#x?[0-9a-fA-F]+|\w+);/g, (match, entity: string) => {
    if (entity.startsWith('#x') || entity.startsWith('#X')) {
      const codePoint = Number.parseInt(entity.slice(2), 16)
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint)
    }

    if (entity.startsWith('#')) {
      const codePoint = Number.parseInt(entity.slice(1), 10)
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint)
    }

    return namedEntities[entity] ?? match
  })
}

function normalizeText(text: string): string {
  return decodeHtml(text)
    .replaceAll('\u00A0', ' ')
    .replace(/<br\b[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim()
}

function formatUnitNumber(unitNumber: number): string {
  return String(unitNumber).padStart(3, '0')
}

function relativeToRoot(filePath: string): string {
  return path.relative(rootDir, filePath).split(path.sep).join('/')
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

function parseUnitsFromToc(tocXml: string): TocUnit[] {
  const units = new Map<number, TocUnit>()
  const unitPattern = /<navLabel><text>Unit\s+(\d+):\s*([\s\S]*?)<\/text><\/navLabel><content src="([^"]+)"/g

  for (const match of tocXml.matchAll(unitPattern)) {
    const number = Number.parseInt(match[1], 10)

    if (!Number.isInteger(number)) {
      continue
    }

    const title = normalizeText(match[2])
    const theoryPath = match[3].split('#')[0]
    const exercisesPath = theoryPath.replace('P001.html', 'P002.html')

    units.set(number, {
      number,
      title,
      theoryPath,
      exercisesPath,
    })
  }

  return [...units.values()].sort((left, right) => left.number - right.number)
}

function collectStructurePages(nodes: StructureNode[], bucket: StructureNode[] = []): StructureNode[] {
  for (const node of nodes) {
    if (node.modelName === 'page' && node.localPath) {
      bucket.push(node)
    }

    if (node.content) {
      collectStructurePages(node.content, bucket)
    }
  }

  return bucket
}

function extractVisibleAdditionalExerciseNumbers(html: string): number[] {
  const visibleNumbers = new Set<number>()
  const pattern = /<div id="popupBtnId(\d+)"[^>]*style="([^"]*)"[^>]*>/g

  for (const match of html.matchAll(pattern)) {
    if (match[2].includes('display:none')) {
      continue
    }

    visibleNumbers.add(Number.parseInt(match[1], 10) + 1)
  }

  return [...visibleNumbers].sort((left, right) => left - right)
}

function extractAdditionalCoverage(html: string): string[] {
  const coverage = new Set<string>()
  const stripped = html.replace(/<!--[\s\S]*?-->/g, ' ')
  const text = normalizeText(stripped)
  const matches = text.match(/Units?\s+\d+(?:[–-]\d+)?(?:\s*,\s*\d+(?:[–-]\d+)?)*(?:\s*,\s*Appendix\s+\d+)?/g) ?? []

  for (const match of matches) {
    const normalized = match.replace(/-/g, '–').replace(/\s*,\s*/g, ', ')
    coverage.add(normalized)
  }

  return [...coverage]
}

function expandCoverageLabel(label: string): number[] {
  const unitNumbers = new Set<number>()
  const normalizedLabel = label.replace(/Units?\s+/g, '').replace(/Appendix\s+\d+/g, '').trim()

  if (!normalizedLabel) {
    return []
  }

  for (const part of normalizedLabel.split(',')) {
    const trimmed = part.trim()

    if (!trimmed) {
      continue
    }

    const rangeMatch = trimmed.match(/^(\d+)\s*[–-]\s*(\d+)$/)
    if (rangeMatch) {
      const start = Number.parseInt(rangeMatch[1], 10)
      const end = Number.parseInt(rangeMatch[2], 10)
      const lower = Math.min(start, end)
      const upper = Math.max(start, end)

      for (let unitNumber = lower; unitNumber <= upper; unitNumber += 1) {
        unitNumbers.add(unitNumber)
      }
      continue
    }

    const singleMatch = trimmed.match(/^\d+$/)
    if (singleMatch) {
      unitNumbers.add(Number.parseInt(trimmed, 10))
    }
  }

  return [...unitNumbers].sort((left, right) => left - right)
}

function expandCoverageLabels(labels: string[]): number[] {
  const unitNumbers = new Set<number>()

  for (const label of labels) {
    for (const unitNumber of expandCoverageLabel(label)) {
      unitNumbers.add(unitNumber)
    }
  }

  return [...unitNumbers].sort((left, right) => left - right)
}

async function listAdditionalExercisePages(): Promise<Array<{ pageNumber: number; sourcePath: string }>> {
  const fileNames = (await readdir(htmlDir))
    .filter((fileName) => /^ESSB01ADEXP\d{3}\.html$/.test(fileName))
    .sort()

  return fileNames.map((fileName) => ({
    pageNumber: Number.parseInt(fileName.match(/(\d{3})/)?.[1] ?? '0', 10),
    sourcePath: path.join(htmlDir, fileName),
  }))
}

async function collectReviewPackFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        return collectReviewPackFiles(entryPath)
      }

      if (entry.isFile() && entry.name !== 'index.ts' && entry.name.endsWith('.ts')) {
        return [entryPath]
      }

      return []
    }),
  )

  return nested.flat()
}

async function listReviewPackInfos(): Promise<ReviewPackInfo[]> {
  const reviewPackPaths = await collectReviewPackFiles(reviewPackDir)

  const reviewPackInfos = await Promise.all(
    reviewPackPaths.sort().map(async (reviewPackPath) => {
      const content = await readFile(reviewPackPath, 'utf8')
      const coversUnitsMatch = content.match(/coversUnits\s*:\s*\[([^\]]*)\]/)
      const coversUnits = (coversUnitsMatch?.[1] ?? '')
        .split(',')
        .map((value) => Number.parseInt(value.trim(), 10))
        .filter((value) => Number.isInteger(value))

      return {
        path: relativeToRoot(reviewPackPath),
        coversUnits,
      }
    }),
  )

  return reviewPackInfos
}

function intersectUnits(left: number[], right: number[]): number[] {
  const rightSet = new Set(right)
  return left.filter((value) => rightSet.has(value)).sort((a, b) => a - b)
}

function arraysEqual(left: number[], right: number[]): boolean {
  if (left.length !== right.length) {
    return false
  }

  return left.every((value, index) => value === right[index])
}

async function buildReviewPackCoverageMap(additionalPages: AdditionalExerciseManifest[]) {
  const reviewPacks = await listReviewPackInfos()

  for (const page of additionalPages) {
    const candidates: ReviewPackCandidate[] = []

    for (const reviewPack of reviewPacks) {
      if (reviewPack.coversUnits.length === 0) {
        continue
      }

      const overlapUnits = intersectUnits(page.coveredUnitNumbers, reviewPack.coversUnits)
      if (overlapUnits.length === 0) {
        continue
      }

      candidates.push({
        path: reviewPack.path,
        overlapUnits,
        candidateType: arraysEqual(overlapUnits, reviewPack.coversUnits) ? 'exact' : 'partial',
      })
    }

    page.reviewPackCandidates = candidates.sort((left, right) => {
      if (left.candidateType !== right.candidateType) {
        return left.candidateType === 'exact' ? -1 : 1
      }

      return left.path.localeCompare(right.path)
    })
  }
}

function extractSectionTitleByUnitNumber(structure: StructureFile, unitNumber: number): string | undefined {
  const sections = structure.book?.content ?? []

  for (const section of sections) {
    if (!section.content) {
      continue
    }

    for (const chapter of section.content) {
      const titleMatch = chapter.title?.match(/^Unit\s+(\d+):/)
      const chapterUnitNumber = Number.parseInt(titleMatch?.[1] ?? '', 10)

      if (chapterUnitNumber === unitNumber) {
        return section.title
      }
    }
  }

  return undefined
}

async function writeJson(filePath: string, data: unknown) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

function renderUnitManifestMarkdown(manifest: UnitManifest): string {
  return `# Unit ${manifest.unitNumber}: ${manifest.title}

- Section: ${manifest.sectionTitle ?? '_Unknown_'}
- Theory source: \`${manifest.theoryPath}\`
- Exercises source: \`${manifest.exercisesPath}\`
- App unit path: \`${manifest.appUnitPath}\`
- App unit exists: ${manifest.appUnitExists ? 'yes' : 'no'}
- Related additional exercise pages: ${manifest.relatedAdditionalExercisePages.length > 0 ? manifest.relatedAdditionalExercisePages.map((page) => `page-${String(page).padStart(3, '0')}`).join(', ') : '_None detected_'}
`
}

function renderReviewPackCandidates(candidates: ReviewPackCandidate[]): string {
  if (candidates.length === 0) {
    return '_None matched_'
  }

  return candidates
    .map((candidate) => `\`${candidate.path}\` (${candidate.candidateType}; overlap: ${candidate.overlapUnits.join(', ')})`)
    .join(', ')
}

function renderAdditionalExerciseMarkdown(manifest: AdditionalExerciseManifest): string {
  return `# Additional Exercises Page ${String(manifest.pageNumber).padStart(3, '0')}

- Source: \`${manifest.sourcePath}\`
- Coverage: ${manifest.coverage.length > 0 ? manifest.coverage.map((item) => `\`${item}\``).join(', ') : '_Not detected_'}
- Coverage inferred: ${manifest.coverageInferred ? 'yes' : 'no'}
- Covered units: ${manifest.coveredUnitNumbers.length > 0 ? manifest.coveredUnitNumbers.join(', ') : '_None detected_'}
- Visible popup exercises: ${manifest.popupExercises.length > 0 ? manifest.popupExercises.join(', ') : '_None_'}
- Review-pack candidates: ${renderReviewPackCandidates(manifest.reviewPackCandidates)}
`
}

function renderCatalogReadme(units: UnitManifest[], additionalPages: AdditionalExerciseManifest[], miscPages: MiscPageManifest[]): string {
  const unitLines = units.map(
    (unit) => `- [Unit ${unit.unitNumber}: ${unit.title}](./units/unit-${formatUnitNumber(unit.unitNumber)}.md)`,
  )
  const additionalLines = additionalPages.map(
    (page) => `- [Page ${String(page.pageNumber).padStart(3, '0')}](./additional-exercises/page-${String(page.pageNumber).padStart(3, '0')}.md)${page.coverage.length > 0 ? ` — ${page.coverage.join('; ')}` : ''}`,
  )
  const miscLines = miscPages.map(
    (page) => `- ${page.title} — \`${page.sourcePath}\`${page.pageNumber ? ` (page ${page.pageNumber})` : ''}`,
  )

  return `# Reference Catalog

> ⚠️ GENERATED FILE — DO NOT EDIT MANUALLY.
> Rebuild with \`bun run extract:index\`.

Catalog builder output for the local EPUB references.

This directory is intentionally metadata-first:
- it does **not** try to reconstruct full lesson text;
- it points to the real EPUB/HTML sources;
- it helps navigate units, additional exercises, and other reference pages.

Notes about review-pack candidates:
- these are **coverage-based candidates**, not exact exercise mappings;
- additional exercises may become review packs with different final tasks;
- candidateType = \`exact\` means the page fully covers an existing review pack range;
- candidateType = \`partial\` means there is only a partial unit overlap.

Run:

\`\`\`bash
bun run extract:index
\`\`\`

## Units

${unitLines.join('\n')}

## Additional exercises

${additionalLines.join('\n')}

## Other reference pages

${miscLines.join('\n')}
`
}

async function main() {
  const { outDir } = parseArgs(process.argv.slice(2))
  const tocXml = await readFile(tocPath, 'utf8')
  const structure = JSON.parse(await readFile(structurePath, 'utf8')) as StructureFile
  const tocUnits = parseUnitsFromToc(tocXml)
  const additionalPageSources = await listAdditionalExercisePages()

  await rm(outDir, { recursive: true, force: true })
  await mkdir(path.join(outDir, 'units'), { recursive: true })
  await mkdir(path.join(outDir, 'additional-exercises'), { recursive: true })

  const additionalPages: AdditionalExerciseManifest[] = []
  let previousCoverage: string[] = []

  for (const pageSource of additionalPageSources) {
    const html = await readFile(pageSource.sourcePath, 'utf8')
    const extractedCoverage = extractAdditionalCoverage(html)
    const coverage = extractedCoverage.length > 0 ? extractedCoverage : previousCoverage
    const coverageInferred = extractedCoverage.length === 0 && previousCoverage.length > 0

    if (extractedCoverage.length > 0) {
      previousCoverage = extractedCoverage
    }

    additionalPages.push({
      pageNumber: pageSource.pageNumber,
      sourcePath: relativeToRoot(pageSource.sourcePath),
      coverage,
      coverageInferred,
      coveredUnitNumbers: expandCoverageLabels(coverage),
      popupExercises: extractVisibleAdditionalExerciseNumbers(html),
      reviewPackCandidates: [],
    })
  }

  await buildReviewPackCoverageMap(additionalPages)

  const units: UnitManifest[] = []

  for (const unit of tocUnits) {
    const relatedAdditionalExercisePages = additionalPages
      .filter((page) => page.coveredUnitNumbers.includes(unit.number))
      .map((page) => page.pageNumber)

    const appUnitPath = path.join(rootDir, 'src', 'data', 'units', `unit${unit.number}.ts`)
    const manifest: UnitManifest = {
      unitNumber: unit.number,
      title: unit.title,
      sectionTitle: extractSectionTitleByUnitNumber(structure, unit.number),
      theoryPath: relativeToRoot(path.join(epubDir, unit.theoryPath)),
      exercisesPath: relativeToRoot(path.join(epubDir, unit.exercisesPath)),
      appUnitPath: relativeToRoot(appUnitPath),
      appUnitExists: await fileExists(appUnitPath),
      relatedAdditionalExercisePages,
    }

    units.push(manifest)

    const baseName = `unit-${formatUnitNumber(unit.number)}`
    await writeJson(path.join(outDir, 'units', `${baseName}.json`), manifest)
    await writeFile(path.join(outDir, 'units', `${baseName}.md`), renderUnitManifestMarkdown(manifest), 'utf8')
  }

  for (const page of additionalPages) {
    const baseName = `page-${String(page.pageNumber).padStart(3, '0')}`
    await writeJson(path.join(outDir, 'additional-exercises', `${baseName}.json`), page)
    await writeFile(
      path.join(outDir, 'additional-exercises', `${baseName}.md`),
      renderAdditionalExerciseMarkdown(page),
      'utf8',
    )
  }

  const structurePages = collectStructurePages(structure.book?.content ?? [])
  const miscPages: MiscPageManifest[] = structurePages
    .filter((page) => {
      const localPath = page.localPath ?? ''
      return !/ESSB01U\d{3}P00[12]\.html$/i.test(localPath) && !/ESSB01ADEXP\d{3}\.html$/i.test(localPath)
    })
    .map((page) => ({
      title: page.title ?? 'Untitled page',
      sourcePath: relativeToRoot(path.join(epubRootDir, page.localPath ?? '')),
      pageNumber: Number.parseInt(page.num ?? '', 10) || undefined,
      sectionPath: page.path,
    }))

  await writeJson(path.join(outDir, 'units.json'), units)
  await writeJson(path.join(outDir, 'additional-exercises.json'), additionalPages)
  await writeJson(path.join(outDir, 'misc-pages.json'), miscPages)
  await writeFile(path.join(outDir, 'README.md'), renderCatalogReadme(units, additionalPages, miscPages), 'utf8')

  console.log(
    `Generated catalog with ${units.length} unit manifest(s), ${additionalPages.length} additional-exercise manifest(s), and ${miscPages.length} misc page record(s) in ${relativeToRoot(outDir)}`,
  )
}

await main()
