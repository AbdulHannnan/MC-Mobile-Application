# Microcare — Architecture & Conventions

This document is the map of the codebase. It's the reference for *where new code
goes* and *why*. It was established in **Phase 1, Module 2** and grows as later
modules add real code into these folders.

## Guiding principles

1. **All source lives under `src/`.** The project root holds only config
   (`app.json`, `babel.config.js`, `tsconfig.json`, `package.json`) and the thin
   entry `App.tsx`.
2. **Feature-first, not file-type-first.** Code that changes together lives
   together. Cross-cutting building blocks are shared; domain logic is grouped by
   feature.
3. **Import with the `@/` alias**, never long `../../../` chains.
   `@/` → `src/`. Configured in **both** `tsconfig.json` (types/editor) and
   `babel.config.js` (runtime); the two must stay in sync.
4. **Barrels (`index.ts`) are the public surface** of a folder. Import from the
   folder, not from deep internal files.

## Folder map

```
src/
├─ app/          Root screen today; Expo Router routes land here in Module 4.
├─ components/   Shared, presentational UI primitives (Button, Card, Input…).
│               "Dumb" — props in, UI out; no navigation/server/business logic.
├─ constants/    App-wide constants; theme tokens become the design system (M5).
├─ features/     Feature-first modules (auth, services, cart, booking, payment,
│               orders). Each owns its screens/components/hooks/types. See its
│               README for the per-feature shape and the cross-import rule.
├─ hooks/        Generic reusable hooks (feature-specific hooks live in-feature).
├─ lib/          Third-party integrations & wrappers: API client, auth, Stripe.
├─ store/        Global client state (Zustand): session, booking draft, cart.
├─ types/        Shared TypeScript types / domain vocabulary.
└─ utils/        Pure helper functions (formatting, math) — easy to unit-test.
```

## Where does X go? (quick guide)

| You're adding…                              | Put it in…                        |
|---------------------------------------------|-----------------------------------|
| A button/input reused on many screens       | `src/components`                  |
| A screen for a specific flow (e.g. checkout)| `src/features/<feature>/screens`  |
| A hook only booking uses                    | `src/features/booking/hooks`      |
| A hook many features use                    | `src/hooks`                       |
| The API client / an SDK setup               | `src/lib`                         |
| Global state (auth session, cart)           | `src/store`                       |
| A domain type used across features          | `src/types`                       |
| A pure formatting/math helper               | `src/utils`                       |
| A color/spacing/typography token            | `src/constants` (design system M5)|

## State: two kinds, kept separate

- **Client state we own** (session, booking draft, cart) → **Zustand** in
  `src/store`.
- **Server data** (services, availability, orders) → **React Query** cache in
  the feature layer. We do *not* copy server data into Zustand.

## Cross-feature imports

Import another feature only through its `index.ts` (public API). Shared folders
(`components`, `lib`, `store`, `hooks`, `types`, `utils`, `constants`) may be
imported freely — they exist to be shared.
