import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAuthStore } from "../App/store/use-auth";

export const SignOutToolbar = () => {
  const signOutCallback = () => {
    useAuthStore.setState({ isAuth: false, user: null });
  };

  return (
    <Pressable
      style={{ marginRight: 10 }}
      onPress={signOutCallback}
      children={<Ionicons name="exit-outline" size={25} />}
    />
  );
};
