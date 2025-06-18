import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTransparent: false,
        tabBarStyle: [
          styles.tabBarStyle,
          Platform.OS === "android" && { paddingBottom: 10, paddingTop: 9 },
        ],
      })}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home-outline" size={25} />,
        }}
      />
      <Tabs.Screen
        name="Payments"
        options={{
          title: "Payments",
          tabBarIcon: () => <Ionicons name="wallet-outline" size={25} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Ionicons name="person-circle-outline" size={25} />,
        }}
      />
      <Tabs.Screen
        name="Payments/[paymentId]"
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
          tabBarBadgeStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
          tabBarBadgeStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 0,
    width: "100%",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
        shadowColor: "#000",
      },
    }),
  },
});
