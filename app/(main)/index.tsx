// Home Page home screen
import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Starbucks Home</Text>
      <Text style={styles.subtitle}>Browse and order your favorite drinks</Text>

      <Button
        title="View Product"
        onPress={() => router.push("/(main)/product/1")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20 },
});