import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: "left",
        headerTitle: "Payments",
      }}
    />
  );
}
