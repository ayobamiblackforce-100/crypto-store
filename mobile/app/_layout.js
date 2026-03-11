import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#020617" },
        headerTintColor: "#e5e7eb",
        contentStyle: { backgroundColor: "#020617" }
      }}
    />
  );
}
