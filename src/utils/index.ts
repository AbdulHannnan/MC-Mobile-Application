// src/utils — small, pure helper functions.
//
// "Pure" means: given the same input they always return the same output and
// they have no side effects (no network calls, no reading global state). That
// makes them trivial to reuse and to unit-test (Module 48). Formatting money,
// formatting dates, clamping numbers — all live here.
//
// One sample helper is included to establish the style. Add more as named
// exports and re-export them from this barrel.

/** Format a number of cents as a currency string, e.g. 1999 -> "$19.99". */
export function formatCurrency(cents: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(cents / 100);
}
