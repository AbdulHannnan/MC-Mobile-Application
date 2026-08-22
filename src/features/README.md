# `src/features` — feature-first modules

Each **feature** is a self-contained slice of the app that owns everything it
needs: its screens, components, hooks, types, and data logic. This is the
opposite of grouping by file-type ("all screens here, all hooks there"). Feature
folders keep related code together, so a change to booking rarely forces you to
touch auth.

## When to create a feature folder

Make one per major domain area of Microcare. Planned features (from the README
roadmap) include:

```
src/features/
  auth/        # signup, login, session, secure token storage   (Phase 2)
  services/    # categories, service detail, search              (Phase 3)
  cart/        # selection / cart state and screen               (Phase 3)
  booking/     # calendar, time slots, review/summary            (Phase 4)
  payment/     # checkout, Stripe, payment intent                (Phase 5)
  orders/      # order history, digital receipt                  (Phase 6)
```

## Suggested shape of one feature

```
src/features/booking/
  components/   # UI used only by booking
  hooks/        # booking-specific hooks (e.g. useAvailability)
  screens/      # booking screens (wired into routing)
  types.ts      # booking-only types
  store.ts      # booking-only Zustand slice (if needed)
  index.ts      # barrel: the feature's public surface
```

## The one rule

Import ACROSS features only through a feature's `index.ts` (its public API).
Reach into `src/components`, `src/lib`, `src/store`, etc. freely — those are
shared by design. This keeps features loosely coupled and easy to move or delete.

> Folders here are created as each phase is built. This README is the
> convention; the code arrives module by module.
