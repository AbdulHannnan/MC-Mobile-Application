# Microcare

A cross-platform mobile app (iOS + Android) built with **React Native** via **Expo (managed workflow)** and **TypeScript**. Users sign up, browse service categories, pick a specific service, choose a date/time on a calendar, review a summary, check out and pay, and receive a booking receipt by email — with the booking saved to their account and pushed to email/CRM.

## How this project is built

- **Framework:** Expo (managed workflow) — lets us build and run a real native app without needing Xcode/Android Studio locally, and without a Mac.
- **Language:** TypeScript throughout.
- **Navigation:** Expo Router (file-based routing, similar in spirit to Next.js).
- **State:** Zustand for global state, React Query for server data/caching.
- **Auth & data:** backend/auth + payment + email/CRM providers are chosen together when we reach those modules (rule #7 — we never invent secrets).
- **Build & ship:** EAS (Expo Application Services) cloud builds — because development is on **Windows** (no Mac), we build iOS/Android in the cloud and ship OTA updates with EAS Update.

### Working agreement
We build **exactly one module per turn, in order**. After each module I summarize what was built, explain any new mobile/React Native concepts, list changed files, tick the box below, and **stop** until you type `continue`. Code is commented generously for learning. No jumping ahead; decisions and secrets are always confirmed with you first.

---

## Modules

### Phase 1 — Foundation
- [x] 1. Initialize Expo + TypeScript project and run it once on a device/emulator
- [ ] 2. Folder structure & architecture conventions
- [ ] 3. App config & environment variables (app.json, .env, app.config.ts)
- [ ] 4. Navigation setup with Expo Router
- [ ] 5. Design system: theme tokens (colors, spacing, typography, radii)
- [ ] 6. Reusable UI primitives (Text, Button, Input, Card, Screen)
- [ ] 7. Global state management setup (Zustand)
- [ ] 8. API client layer (wrapper, base URL, error handling)

### Phase 2 — Auth
- [ ] 9. Backend/auth provider setup and connection
- [ ] 10. Auth store & session model
- [ ] 11. Signup screen UI
- [ ] 12. Signup logic + validation
- [ ] 13. Login screen UI
- [ ] 14. Login logic + error handling
- [ ] 15. Secure token storage (expo-secure-store)
- [ ] 16. Auth guards / protected routes, logout, password reset

### Phase 3 — Entities & service browsing
- [ ] 17. Domain models & TypeScript types for all entities
- [ ] 18. Backend schema for service categories & services
- [ ] 19. Home / dashboard screen
- [ ] 20. Service categories list screen
- [ ] 21. Service detail screen with sub-service selection
- [ ] 22. Data fetching + caching (React Query)
- [ ] 23. Search & filter for services
- [ ] 24. Selection/cart state
- [ ] 25. Cart / selection screen
- [ ] 26. Cart persistence across app restarts

### Phase 4 — Booking flow
- [ ] 27. Calendar component integration
- [ ] 28. Date selection logic & state
- [ ] 29. Time-slot picker UI
- [ ] 30. Availability logic (open slots from backend)
- [ ] 31. Booking draft state management
- [ ] 32. Review / summary screen
- [ ] 33. Edit-from-summary navigation
- [ ] 34. Pre-checkout validation

### Phase 5 — Payment
- [ ] 35. Payment provider decision & account setup (Stripe)
- [ ] 36. Stripe React Native SDK integration
- [ ] 37. Checkout screen UI
- [ ] 38. Backend: create payment intent (server-side)
- [ ] 39. Payment confirmation, success & failure handling
- [ ] 40. Create the order/booking record on success

### Phase 6 — Post-purchase
- [ ] 41. Persist booking to the client's account
- [ ] 42. Email receipt integration
- [ ] 43. CRM / webhook integration
- [ ] 44. Order history screen
- [ ] 45. Order detail / digital receipt view

### Phase 7 — Polish & ship
- [ ] 46. Loading, empty, and error states + error boundaries
- [ ] 47. Push notifications setup (expo-notifications)
- [ ] 48. Testing basics (unit + one end-to-end happy path)
- [ ] 49. EAS Build config for iOS & Android (from Windows)
- [ ] 50. EAS Update (OTA) + store submission prep
