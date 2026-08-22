// App.tsx — the app's entry point (loaded by Expo's AppEntry at the project root).
//
// As of Module 2, this file is intentionally tiny. All real source code lives
// under `src/`, so App.tsx does only one job: render the root screen from there.
// Keeping the entry point thin means the folder structure — not this file — is
// where the app actually grows. (In Module 4, Expo Router will take over routing
// via `src/app`, and this file will be replaced by the router entry.)
//
// The `@/` prefix is a path alias configured in tsconfig.json + babel.config.js:
//   @/app/RootScreen  ==  src/app/RootScreen
export { default } from '@/app/RootScreen';
