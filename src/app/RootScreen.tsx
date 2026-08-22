// RootScreen — the app's first real screen, now living inside src/.
//
// WHY THIS MOVED HERE (Module 2 — folder structure):
// In Module 1 the whole UI lived in the root App.tsx. That's fine for a demo,
// but a real app needs a predictable home for every kind of file. From now on
// ALL source code lives under `src/` and App.tsx (at the project root) is just a
// thin entry point that renders this screen. See ARCHITECTURE.md for the full
// map of where things go.
//
// Note the import style below: we import theme tokens using the `@/` alias,
// which points at `src/`. So `@/constants` === `src/constants`, no matter how
// deep the current file is. No more `../../../` chains.

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING, TYPOGRAPHY } from '@/constants';
// Reading config through the typed accessor proves the full chain works:
// .env  →  app.config.ts (extra)  →  expo-constants  →  src/lib/config.ts.
import { config } from '@/lib';

export default function RootScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Microcare</Text>
      <Text style={styles.subtitle}>Module 3: config & env wired ✅</Text>

      {/* Live proof the env pipeline works — shows values that came from .env. */}
      <Text style={styles.meta}>env: {config.appEnv}</Text>
      <Text style={styles.meta}>api: {config.apiBaseUrl}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

// Styles now read from shared constants instead of hard-coded values. These
// constants are placeholders for now; Module 5 turns them into a real design
// system. Using them here proves the `@/` alias and the folder layout work.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.lg,
  },
  title: {
    fontSize: TYPOGRAPHY.title,
    fontWeight: '700',
    color: COLORS.text,
  },
  subtitle: {
    marginTop: SPACING.sm,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.muted,
    textAlign: 'center',
  },
  meta: {
    marginTop: SPACING.xs,
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.primary,
  },
});
