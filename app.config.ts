// app.config.ts — DYNAMIC app configuration (Module 3).
//
// Until now, all Expo config lived in the static `app.json`. That file is great
// for values that never change (app name, icon, orientation), but it can't read
// environment variables or run any logic. `app.config.ts` can.
//
// HOW EXPO PICKS THIS UP:
// When both files exist, Expo evaluates `app.config.ts` and hands us the parsed
// contents of `app.json` as `config`. We spread that in, then add the dynamic
// bits. So app.json stays the declarative "base", and this file layers env-driven
// values on top. (This file runs in Node during the build/dev-server startup —
// NOT on the phone.)
//
// ENV VARS:
// The Expo CLI automatically loads `.env` into `process.env` before running this
// file, so `process.env.APP_ENV` etc. are available here. We read them and pass
// the resulting values to the app through the `extra` field — the one channel
// that carries custom config from build time into the running app, where
// `src/lib/config.ts` reads it back via expo-constants.
//
// RULE #7 — NO SECRETS HERE: everything below is non-sensitive config (which
// environment we're in, which API URL to call). Real secrets (payment keys,
// auth secrets) are added only when we choose those providers, and never
// hard-coded or committed.

import type { ConfigContext, ExpoConfig } from 'expo/config';

// The set of environments we support. `APP_ENV` should be one of these.
type AppEnv = 'development' | 'preview' | 'production';

function resolveAppEnv(): AppEnv {
  const value = process.env.APP_ENV;
  if (value === 'development' || value === 'preview' || value === 'production') {
    return value;
  }
  // Sensible default so the app still runs if .env is missing (e.g. fresh clone).
  return 'development';
}

export default ({ config }: ConfigContext): ExpoConfig => {
  const appEnv = resolveAppEnv();

  // API base URL: an EXPO_PUBLIC_ variable. That prefix means it's safe to ship
  // to the client. We also read it here so it lands in `extra` for a single,
  // typed access point in app code. Falls back to localhost for first-run.
  const apiBaseUrl =
    process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';

  return {
    // Everything from app.json (name, slug, icon, plugins, …).
    ...config,
    // These two are required by the ExpoConfig type; app.json provides them,
    // but we assert defaults so TypeScript is happy and a fresh clone is safe.
    name: config.name ?? 'Microcare',
    slug: config.slug ?? 'microcare',

    // URL scheme for deep linking (Module 4). Expo Router uses this so links
    // like `microcare://about` can open a specific screen from outside the app.
    scheme: 'microcare',

    // Register the Expo Router plugin alongside whatever app.json declared
    // (e.g. expo-asset). We de-dupe so re-runs don't add it twice.
    plugins: Array.from(new Set([...(config.plugins ?? []), 'expo-router'])),

    // Typed routes: Expo generates a type for every route file, so `<Link href>`
    // and `router.push()` are checked against real routes — a typo is a compile
    // error, not a runtime dead link.
    experiments: {
      ...config.experiments,
      typedRoutes: true,
    },

    // `extra` is the bridge from build-time config to runtime code.
    extra: {
      ...config.extra,
      appEnv,
      apiBaseUrl,
    },
  };
};
