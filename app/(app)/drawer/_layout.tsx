import { SignOutToolbar } from "@/modules/Shared/SignOutToolbar";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { Text } from "react-native";

export default function DrawerLayout() {
  return (
    <Drawer
      initialRouteName="(tabs)"
      screenOptions={() => ({
        headerShown: true,
        headerTransparent: true,
        lazy: true,
        title: "",
        swipeEdgeWidth: 0,
        drawerActiveTintColor: undefined,
        headerShadowVisible: false,
        drawerInactiveTintColor: undefined,
        drawerStyle: {
          width: 300,
        },
        drawerItemStyle: {
          paddingTop: 10,
          borderRadius: 10,
        },
        headerRight: SignOutToolbar,
      })}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: true, drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen
        name="SupportApp"
        options={({ route }) => ({
          drawerIcon: () => <Ionicons name="home-outline" size={25} />,
          drawerLabel: () => <Text>Support</Text>,
        })}
      />
    </Drawer>
  );
}
