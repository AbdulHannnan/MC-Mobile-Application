// src/app/_layout.tsx — the ROOT LAYOUT for Expo Router (Module 4).
//
// BIG SHIFT — FILE-BASED ROUTING:
// We no longer have a single App.tsx that decides what to render. Instead, the
// files inside `src/app/` ARE the navigation tree, the same idea as Next.js:
//
//   src/app/index.tsx   →  the "/" route (home)
//   src/app/about.tsx   →  the "/about" route
//   src/app/_layout.tsx →  wraps every route below it (this file)
//
// Expo Router finds this `app` directory automatically (it checks `src/app`
// because we don't have a root-level `app/`), and the app's entry point is now
// `expo-router/entry` (set in package.json) instead of App.tsx.
//
// A `_layout` file renders UI that should PERSIST across its child routes — here,
// the navigation container itself. We use a Stack: a classic push/pop navigator
// where each new screen slides in on top and the header gets a back button.

import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { COLORS } from '@/constants';

export default function RootLayout() {
  return (
    // SafeAreaProvider measures the notch / status bar / home indicator so
    // screens can avoid drawing under them. Required for safe-area hooks to work.
    <SafeAreaProvider>
      <Stack
        // Default options applied to every screen in this Stack. Individual
        // screens can override these (see the <Stack.Screen> entries below or
        // per-screen <Stack.Screen options={...}> inside a route).
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.background },
          headerTintColor: COLORS.text,
          contentStyle: { backgroundColor: COLORS.background },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Microcare' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
