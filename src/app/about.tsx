// src/app/about.tsx — the "/about" route.
//
// This second screen exists to demonstrate navigation. Because the file is named
// `about.tsx`, Expo Router automatically exposes it at "/about" — no route table
// to register, no navigator config. Creating the file IS creating the route.
//
// It shows the IMPERATIVE way to navigate: useRouter(). You call router methods
// (push, replace, back) in response to events — useful when navigation depends
// on logic, e.g. after a form submits. The <Link> in index.tsx is the
// declarative counterpart; use whichever reads better at the call site.

import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS, RADII, SPACING, TYPOGRAPHY } from '@/constants';

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Microcare</Text>
      <Text style={styles.body}>
        Screens live in <Text style={styles.code}>src/app</Text>. A file is a
        route; a folder can group routes; <Text style={styles.code}>_layout</Text>{' '}
        wraps them. This screen was reached by pushing it onto the Stack, so the
        header shows a back button automatically.
      </Text>

      {/* Imperative navigation: go back to the previous screen in the Stack. */}
      <Pressable
        style={styles.button}
        onPress={() => router.back()}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>← Go back</Text>
      </Pressable>
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
    fontSize: TYPOGRAPHY.heading,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  body: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.muted,
    textAlign: 'center',
    lineHeight: 22,
  },
  code: {
    color: COLORS.text,
    fontWeight: '600',
  },
  button: {
    marginTop: SPACING.lg,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.primary,
    borderRadius: RADII.md,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
  },
});
