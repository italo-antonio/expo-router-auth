import { useAuthStore } from "@/modules/App/store/use-auth";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const heightSize = useHeaderHeight();

  return (
    <View style={[styles.container, { paddingTop: heightSize + 20 }]}>
      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user?.fullname}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email}</Text>

        <Text style={styles.label}>Last login:</Text>
        <Text style={styles.value}>
          {user?.lastLogin ? new Date(user.lastLogin).toLocaleString() : "N/A"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(app)/(stack)/Profile")}
      >
        <Text style={styles.buttonText}>Custom profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
    color: "#222",
  },
  card: {
    backgroundColor: "#F0F2F5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
  },
  button: {
    height: 48,
    backgroundColor: "#FF3B30",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
