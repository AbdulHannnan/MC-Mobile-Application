// src/store — global client state (Zustand).
//
// Zustand stores hold state that many unrelated screens need to read/write:
// the signed-in user/session, the current booking draft, the cart/selection.
// Each concern gets its own store file (e.g. authStore.ts, cartStore.ts) and is
// re-exported here. This is set up properly in Module 7.
//
// IMPORTANT distinction for later: Zustand is for CLIENT state we own. Data that
// comes from the server (services, availability) is cached with React Query in
// the feature layer, NOT duplicated into a store.
//
// Empty barrel for now. Later:
//   export { useAuthStore } from './authStore';

export {};
