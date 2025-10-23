import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Onboarding screens */}
      <Stack.Screen name="(onboarding)" />

      {/* Auth screens */}
      <Stack.Screen name="(auth)" />

      {/* Main app screens */}
      <Stack.Screen name="(main)" />

      {/* Optional modal (from template) */}
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
