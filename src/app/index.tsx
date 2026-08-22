// src/app/index.tsx — the HOME route ("/").
//
// A file named `index` maps to the root of its folder, so this is the first
// screen users see. It replaces the old RootScreen.tsx: with file-based routing,
// the route file itself is the screen — no separate component to wire up.
//
// It also shows the DECLARATIVE way to navigate: the <Link> component. You give
// it an `href` (a route path) and it renders tappable text that pushes that
// route onto the Stack. (The imperative way — useRouter() — is shown in about.tsx.)

import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, RADII, SPACING, TYPOGRAPHY } from '@/constants';
import { config } from '@/lib';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Microcare</Text>
      <Text style={styles.subtitle}>Module 4: Expo Router is live ✅</Text>

      {/* Config still flows through from .env, unchanged by the routing switch. */}
      <Text style={styles.meta}>env: {config.appEnv}</Text>
      <Text style={styles.meta}>api: {config.apiBaseUrl}</Text>

      {/* Declarative navigation: tapping this pushes the /about route. */}
      <Link href="/about" style={styles.link}>
        Go to About →
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

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
  link: {
    marginTop: SPACING.lg,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.primary,
    color: '#ffffff',
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    borderRadius: RADII.md,
    overflow: 'hidden', // keeps the rounded corners on iOS text backgrounds
  },
});
