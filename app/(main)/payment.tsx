// ← payment screen
import { View, Text, StyleSheet } from "react-native";

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💳 Payment</Text>
      <Text style={styles.subtitle}>Select your payment method to continue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555" },
});