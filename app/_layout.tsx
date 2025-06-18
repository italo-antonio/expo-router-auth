import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        {/* <AuthProvider> 
        {/* </AuthProvider> */}
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
