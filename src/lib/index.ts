// src/lib — integrations and wrappers around third-party libraries/services.
//
// This is where the low-level "plumbing" lives: the API client (Module 8),
// and later the auth client, payment SDK setup (Stripe), analytics, etc.
// The rule of thumb: if it talks to the outside world or configures an external
// package, its setup belongs in `lib`. Feature code imports from here rather
// than touching the raw SDK directly, so we can swap providers in one place.
//
// Empty barrel for now. Later:
//   export { api } from './api';

export {};
