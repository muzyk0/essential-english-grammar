import { readFile } from 'node:fs/promises'
import path from 'node:path'
import reviewPacks from '../src/data/review-packs/index.ts'
import units from '../src/data/units/index.ts'

type Candidate = {
  coverageLabel: string
  order: number
  pages: string[]
  units: number[]
}

const rootDir = process.cwd()
const readmePath = path.join(rootDir, 'references', 'markdown', 'additional-exercises', 'README.md')

async function main() {
  const outputJson = process.argv.includes('--json')
  const readme = await readFile(readmePath, 'utf8')
  const candidates = parseCandidates(readme)
  const existingCoverage = new Set(reviewPacks.map((pack) => normalizeUnitsKey(pack.coversUnits)))
  const availableUnits = new Set(units.map((unit) => unit.number))

  const nextCandidate = candidates.find((candidate) => {
    if (existingCoverage.has(normalizeUnitsKey(candidate.units))) {
      return false
    }

    return candidate.units.every((unitNumber) => availableUnits.has(unitNumber))
  })

  if (!nextCandidate) {
    console.error('No uncovered contiguous review-pack candidates found.')
    process.exitCode = 1
    return
  }

  const firstUnit = nextCandidate.units[0]
  const lastUnit = nextCandidate.units[nextCandidate.units.length - 1]
  const suggestedFile = `src/data/review-packs/reviewPack${firstUnit}to${lastUnit}.ts`
  const suggestedId = `review-pack-${firstUnit}-${lastUnit}`
  const payload = {
    coverageLabel: nextCandidate.coverageLabel,
    reason: 'First uncovered contiguous range from Additional exercises whose units already exist in src/data/units/index.ts.',
    referencePages: nextCandidate.pages,
    suggestedFile,
    suggestedId,
    units: nextCandidate.units,
  }

  if (outputJson) {
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  console.log(`Next review pack: ${payload.coverageLabel}`)
  console.log(`Units: ${payload.units.join(', ')}`)
  console.log(`Suggested id: ${payload.suggestedId}`)
  console.log(`Suggested file: ${payload.suggestedFile}`)
  console.log(`Reference pages: ${payload.referencePages.join(', ')}`)
  console.log(`Reason: ${payload.reason}`)
}

function parseCandidates(readme: string): Candidate[] {
  const candidates = new Map<string, Candidate>()
  const lines = readme.split('\n')

  for (const line of lines) {
    const match = line.match(/^- \[Page (\d{3})\]\(\.\/(page-\d{3}\.md)\) — (.*?)(?: \| answer popups: .*|)$/)

    if (!match) {
      continue
    }

    const pageNumber = Number.parseInt(match[1], 10)
    const pageFile = match[2]
    const coverageLabels = match[3].split(';')

    for (const [index, rawLabel] of coverageLabels.entries()) {
      const parsed = parseCoverageLabel(rawLabel)

      if (!parsed) {
        continue
      }

      const key = normalizeUnitsKey(parsed.units)
      const existing = candidates.get(key)

      if (existing) {
        if (!existing.pages.includes(pageFile)) {
          existing.pages.push(pageFile)
        }

        continue
      }

      candidates.set(key, {
        coverageLabel: parsed.coverageLabel,
        order: pageNumber * 100 + index,
        pages: [pageFile],
        units: parsed.units,
      })
    }
  }

  return [...candidates.values()].sort((left, right) => left.order - right.order)
}

function parseCoverageLabel(rawLabel: string): { coverageLabel: string; units: number[] } | null {
  const coverageLabel = rawLabel.replace(/\(inferred\)/g, '').trim()

  if (!coverageLabel || coverageLabel.includes(',')) {
    return null
  }

  if (coverageLabel.toLowerCase().includes('appendix')) {
    return null
  }

  const singleMatch = coverageLabel.match(/^Unit\s+(\d+)$/i)

  if (singleMatch) {
    const unitNumber = Number.parseInt(singleMatch[1], 10)
    return Number.isInteger(unitNumber)
      ? { coverageLabel: `Unit ${unitNumber}`, units: [unitNumber] }
      : null
  }

  const rangeMatch = coverageLabel.match(/^Units\s+(\d+)\s*[–-]\s*(\d+)$/i)

  if (!rangeMatch) {
    return null
  }

  const start = Number.parseInt(rangeMatch[1], 10)
  const end = Number.parseInt(rangeMatch[2], 10)

  if (!Number.isInteger(start) || !Number.isInteger(end) || start > end) {
    return null
  }

  const unitsInRange: number[] = []

  for (let unitNumber = start; unitNumber <= end; unitNumber += 1) {
    unitsInRange.push(unitNumber)
  }

  return {
    coverageLabel: `Units ${start}–${end}`,
    units: unitsInRange,
  }
}

function normalizeUnitsKey(unitNumbers: number[]): string {
  return [...unitNumbers].sort((left, right) => left - right).join(',')
}

await main()
