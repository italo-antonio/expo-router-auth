import { useAuthStore } from "@/modules/App/store/use-auth";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const user = useAuthStore((state) => state.isAuth);

  if (!user) return <Redirect href="/login" />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
