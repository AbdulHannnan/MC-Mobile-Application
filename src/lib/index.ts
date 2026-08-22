// src/lib — integrations and wrappers around third-party libraries/services.
//
// This is where the low-level "plumbing" lives: app configuration (Module 3),
// the API client (Module 8), and later the auth client, payment SDK setup
// (Stripe), analytics, etc. The rule of thumb: if it talks to the outside world
// or configures an external package/environment, its setup belongs in `lib`.
// Feature code imports from here rather than touching raw SDKs or env vars
// directly, so we can swap providers in one place.

export { config, isDev, isProd } from './config';
export type { AppConfig, AppEnv } from './config';
