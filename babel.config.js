// Babel config for React Native.
//
// Web React usually transpiles with Babel/SWC via your bundler (Vite, webpack).
// React Native uses the *Metro* bundler, and Metro drives Babel using this file.
// `babel-preset-expo` is the one preset that knows how to compile JSX, TypeScript,
// and RN-specific syntax for both iOS and Android.
module.exports = function (api) {
  // Cache the config so Babel doesn't recompute it on every file — a big speed win.
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
