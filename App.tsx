// App.tsx — the root component of the whole app.
//
// KEY MENTAL SHIFT FROM WEB REACT:
// There is no HTML and no DOM here. You never use <div>, <span>, <p>, <button>,
// or CSS files. Instead React Native gives you a small set of built-in
// *native* components that map to real iOS/Android UI widgets:
//
//   <View>  ~ <div>   (a layout box / container)
//   <Text>  ~ <span>/<p>  (ALL text MUST live inside a <Text>; bare strings
//                          in a <View> will crash)
//   plus <Image>, <ScrollView>, <TextInput>, <Pressable>, etc.
//
// Styling is done in JavaScript objects (not CSS), using StyleSheet.create.
// The properties look like CSS but are camelCased (backgroundColor, not
// background-color) and the layout engine is Flexbox — with one big default
// difference: flexDirection defaults to 'column' (top-to-bottom), not 'row'.

import { StatusBar } from 'expo-status-bar'; // controls the phone's top status bar (clock/battery) text color
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // The outermost View fills the screen (flex: 1) and centers its children.
    <View style={styles.container}>
      <Text style={styles.title}>Microcare</Text>
      <Text style={styles.subtitle}>Module 1 is running 🎉</Text>

      {/* 'auto' picks light/dark status-bar text to contrast the background. */}
      <StatusBar style="auto" />
    </View>
  );
}

// StyleSheet.create validates your styles and lets RN optimize them.
// Think of each key as a reusable className, but it's a plain JS object.
const styles = StyleSheet.create({
  container: {
    flex: 1, // take up the entire available screen height/width
    backgroundColor: '#ffffff',
    alignItems: 'center', // horizontal centering (cross axis, since we're a column)
    justifyContent: 'center', // vertical centering (main axis)
  },
  title: {
    fontSize: 28,
    fontWeight: '700', // note: fontWeight is a STRING in RN, not a number
    color: '#111827',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#6b7280',
  },
});
