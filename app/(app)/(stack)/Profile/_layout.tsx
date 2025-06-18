import { ToolbarGoBack } from "@/modules/Shared/ToolbarGoBack";
import { Stack } from "expo-router";

export default function ProfileLayoutScreen() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: true,
        headerShown: true,
        headerTitle: "Edit User",
        headerLeft: ToolbarGoBack,
      }}
    />
  );
}
