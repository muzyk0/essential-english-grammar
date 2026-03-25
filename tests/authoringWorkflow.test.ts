import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const repoRoot = new URL('../', import.meta.url);

function readRepoFile(relativePath: string): string {
  return readFileSync(new URL(relativePath, repoRoot), 'utf8');
}

const addUnitDocs = [
  {
    path: '.agents/skills/add-unit/SKILL.md',
    content: readRepoFile('.agents/skills/add-unit/SKILL.md'),
  },
  {
    path: '.claude/commands/add-unit.md',
    content: readRepoFile('.claude/commands/add-unit.md'),
  },
];

const reviewDocs = [
  {
    path: '.agents/skills/review-content/SKILL.md',
    content: readRepoFile('.agents/skills/review-content/SKILL.md'),
  },
  {
    path: '.claude/commands/review-content.md',
    content: readRepoFile('.claude/commands/review-content.md'),
  },
];

describe('authoring workflow prompts', () => {
  test('use the catalog-to-EPUB-to-unit flow and avoid stale markdown references', () => {
    for (const file of [...addUnitDocs, ...reviewDocs]) {
      expect(file.content, file.path).toContain('references/catalog/units/unit-NNN.md');
      expect(file.content, file.path).toContain('references/EPUB/OEBPS/html/');
      expect(file.content, file.path).toContain('src/data/units/unitN.ts');
      expect(file.content, file.path).toContain('src/data/units/index.ts');
      expect(file.content, file.path).not.toContain('references/markdown');
    }
  });

  test('document repeated explicit unit-number create and QA calls', () => {
    for (const file of addUnitDocs) {
      expect(file.content, file.path).toContain('$add-unit 14');
      expect(file.content, file.path).toContain('$add-unit 15');
      expect(file.content, file.path).toContain('bun run build');
      expect(file.content, file.path).toContain('not a runtime app feature');
    }

    for (const file of reviewDocs) {
      expect(file.content, file.path).toContain('$review-content 14');
      expect(file.content, file.path).toContain('$review-content 15');
      expect(file.content, file.path).toContain('QA and check stage');
      expect(file.content, file.path).toContain('not a runtime app feature');
      expect(file.content, file.path).toContain('not review-pack generation');
      expect(file.content, file.path).toContain('bun run build');
      expect(file.content, file.path).toContain('bun test');
    }
  });

  test('advertise explicit unit-number entry points in agent metadata', () => {
    const addUnitAgent = readRepoFile('.agents/skills/add-unit/agents/openai.yaml');
    const reviewAgent = readRepoFile('.agents/skills/review-content/agents/openai.yaml');

    expect(addUnitAgent).toContain('$add-unit <unit N>');
    expect(addUnitAgent).toContain('$add-unit next');
    expect(reviewAgent).toContain('$review-content <unit N>');
    expect(reviewAgent).toContain('specified unit');
  });
});
