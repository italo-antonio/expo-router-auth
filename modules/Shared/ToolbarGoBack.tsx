import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export const ToolbarGoBack = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.back()}
      children={<Ionicons name="arrow-back" size={25} />}
    />
  );
};
