const rawBase = import.meta.env.BASE_URL || '/';

function normalizeBase(base: string): string {
  if (!base || base === '/') {
    return '/';
  }

  const trimmed = base.endsWith('/') ? base.slice(0, -1) : base;
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

export const appBase = normalizeBase(rawBase);
