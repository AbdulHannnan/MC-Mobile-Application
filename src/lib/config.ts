// src/lib/config.ts — the single, typed access point for app configuration.
//
// WHY THIS EXISTS:
// Config values start their life in `.env`, get read in `app.config.ts` at build
// time, and are passed to the app through the `extra` field. On the DEVICE, that
// `extra` object is exposed by the `expo-constants` package. Rather than have
// screens dig into `Constants.expoConfig?.extra?.apiBaseUrl` (untyped, easy to
// typo, may be undefined), every part of the app imports the typed `config`
// object from here. If we ever change where config comes from, we change it once.
//
// It lives in `lib/` because reading environment/build config is plumbing that
// connects the app to the outside world — exactly what `lib` is for.

import Constants from 'expo-constants';

export type AppEnv = 'development' | 'preview' | 'production';

export type AppConfig = {
  /** Which environment this build represents. */
  appEnv: AppEnv;
  /** Base URL of the backend API. */
  apiBaseUrl: string;
};

// `extra` is whatever app.config.ts put there. It's typed as unknown-ish by
// expo-constants, so we read it defensively and fall back to safe defaults.
const extra = (Constants.expoConfig?.extra ?? {}) as Partial<AppConfig>;

function resolveAppEnv(value: unknown): AppEnv {
  return value === 'preview' || value === 'production' ? value : 'development';
}

export const config: AppConfig = {
  appEnv: resolveAppEnv(extra.appEnv),
  apiBaseUrl: extra.apiBaseUrl ?? 'http://localhost:3000',
};

// Convenience flags so feature code reads clearly (e.g. `if (isDev) …`).
export const isDev = config.appEnv === 'development';
export const isProd = config.appEnv === 'production';

// A loud, dev-only warning if something required is missing — catches a
// forgotten `.env` early instead of failing mysteriously deep in a network call.
if (isDev && !config.apiBaseUrl) {
  console.warn(
    '[config] apiBaseUrl is empty. Did you copy .env.example to .env?',
  );
}
