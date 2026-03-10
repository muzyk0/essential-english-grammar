import { readFile } from 'node:fs/promises'
import path from 'node:path'

type UnitRow = {
  number: number
  status: string
  topicEn: string
  topicRu: string
}

const rootDir = process.cwd()
const unitsPath = path.join(rootDir, 'UNITS.md')

async function main() {
  const outputJson = process.argv.includes('--json')
  const markdown = await readFile(unitsPath, 'utf8')
  const rows = parseUnitRows(markdown)
  const nextUnit = rows.find((row) => row.status === 'stub' || row.status === '—')

  if (!nextUnit) {
    console.error('No remaining unit candidates found in UNITS.md.')
    process.exitCode = 1
    return
  }

  const payload = {
    number: nextUnit.number,
    reason: 'First row in UNITS.md whose status is stub or —.',
    status: nextUnit.status,
    suggestedFile: `src/data/units/unit${nextUnit.number}.ts`,
    topicEn: nextUnit.topicEn,
    topicRu: nextUnit.topicRu,
  }

  if (outputJson) {
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  console.log(`Next unit: Unit ${payload.number} — ${payload.topicEn}`)
  console.log(`Russian topic: ${payload.topicRu}`)
  console.log(`Status: ${payload.status}`)
  console.log(`Suggested file: ${payload.suggestedFile}`)
  console.log(`Reason: ${payload.reason}`)
}

function parseUnitRows(markdown: string): UnitRow[] {
  const rows: UnitRow[] = []

  for (const line of markdown.split('\n')) {
    if (!line.startsWith('|')) {
      continue
    }

    const cells = line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim())

    if (cells.length !== 4) {
      continue
    }

    if (cells[0] === '#' || /^-+$/.test(cells[0])) {
      continue
    }

    const number = Number.parseInt(cells[0], 10)

    if (!Number.isInteger(number)) {
      continue
    }

    rows.push({
      number,
      status: cells[3],
      topicEn: cells[1],
      topicRu: cells[2],
    })
  }

  return rows
}

await main()
