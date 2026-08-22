// src/constants — app-wide constant values.
//
// This is the barrel file for the `constants` folder. A "barrel" is a single
// index file that re-exports everything in a folder, so callers can write
// `import { COLORS } from '@/constants'` instead of reaching into individual
// files. Every folder under src/ follows this same pattern.
//
// The values below are intentionally minimal PLACEHOLDERS. Module 5 replaces
// them with a proper design system (full color palette, spacing scale,
// typography ramp, radii). For now they exist only so the folder has a real,
// importable shape and RootScreen can prove the `@/` alias works.

export const COLORS = {
  background: '#ffffff',
  text: '#111827',
  muted: '#6b7280',
  primary: '#2563eb',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const TYPOGRAPHY = {
  title: 28,
  heading: 20,
  body: 16,
  caption: 13,
} as const;

export const RADII = {
  sm: 6,
  md: 10,
  lg: 16,
  pill: 999,
} as const;
