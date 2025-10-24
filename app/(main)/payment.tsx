// payment screen
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PaymentScreen() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: "1", name: "Credit/Debit Card", icon: "credit-card" },
    { id: "2", name: "PayPal", icon: "account-balance-wallet" },
    { id: "3", name: "Apple Pay", icon: "phone-iphone" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>💳 Payment</Text>
        <Text style={styles.subtitle}>Select your payment method to continue</Text>
      </View>

      {/* Payment Options */}
      <View style={styles.methodsContainer}>
        {paymentMethods.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <TouchableOpacity
              key={method.id}
              style={[styles.methodCard, isSelected && styles.selectedCard]}
              onPress={() => setSelectedMethod(method.id)}
            >
              <MaterialIcons
                name={method.icon}
                size={28}
                color={isSelected ? "#fff" : "#00704A"}
                style={styles.methodIcon}
              />
              <Text style={[styles.methodName, isSelected && styles.selectedText]}>
                {method.name}
              </Text>
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={isSelected ? "#fff" : "#00704A"}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Pay Now Button */}
      <View style={styles.payContainer}>
        <TouchableOpacity
          style={[styles.payButton, !selectedMethod && { opacity: 0.6 }]}
          disabled={!selectedMethod}
        >
          <Text style={styles.payText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },

  /** HEADER **/
  header: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 30 },
  title: { fontSize: 26, fontWeight: "bold", color: "#1E3932", marginBottom: 5 },
  subtitle: { fontSize: 16, color: "#555" },

  /** PAYMENT METHODS **/
  methodsContainer: { paddingHorizontal: 20 },
  methodCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: "#00704A",
  },
  methodIcon: { marginRight: 15 },
  methodName: { flex: 1, fontSize: 18, fontWeight: "600", color: "#1E3932" },
  selectedText: { color: "#fff" },

  /** PAY NOW BUTTON **/
  payContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  payButton: {
    backgroundColor: "#00704A",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  payText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
