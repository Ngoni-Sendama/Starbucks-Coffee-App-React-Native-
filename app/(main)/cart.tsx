// cart screen
import { View, Text, StyleSheet } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>
      <Text style={styles.subtitle}>No items yet. Add your favorite coffee!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555" },
}); 