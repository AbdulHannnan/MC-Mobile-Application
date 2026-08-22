// Babel config for React Native.
//
// Web React usually transpiles with Babel/SWC via your bundler (Vite, webpack).
// React Native uses the *Metro* bundler, and Metro drives Babel using this file.
// `babel-preset-expo` is the one preset that knows how to compile JSX, TypeScript,
// and RN-specific syntax for both iOS and Android.
//
// NEW IN MODULE 2 — path aliases:
// We add `babel-plugin-module-resolver` so the bundler understands the `@/`
// alias at RUNTIME. (tsconfig.json teaches the same alias to the TypeScript
// language server for editor autocomplete/type-checking — the two must be kept
// in sync.) With this, `import x from '@/constants'` resolves to `src/constants`
// from anywhere, replacing brittle `../../../` relative paths.
module.exports = function (api) {
  // Cache the config so Babel doesn't recompute it on every file — a big speed win.
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
          },
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
      ],
    ],
  };
};
