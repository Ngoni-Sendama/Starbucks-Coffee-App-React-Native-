// cart screen
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CartScreen() {
  // Example cart items
  const cartItems = [
    {
      id: "1",
      name: "Caffè Latte",
      price: "$4.50",
      image: require("../../assets/images/latte.jpeg"),
      quantity: 1,
    },
    {
      id: "2",
      name: "Cappuccino",
      price: "$4.00",
      image: require("../../assets/images/cappuccino.webp"),
      quantity: 2,
    },
  ];

  const subtotal = cartItems
    .reduce((sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity, 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/profile.jpeg")}
            style={styles.profile}
            resizeMode="cover"
          />
          <Text style={styles.name}>Hi, Ngoni</Text>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <MaterialIcons name="shopping-cart" size={28} color="#1E3932" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>🛒 Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.subtitle}>No items yet. Add your favorite coffee!</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 150 }}
          renderItem={({ item }) => (
            <View style={styles.cartCard}>
              <Image source={item.image} style={styles.cartImage} />
              <View style={styles.cartInfo}>
                <Text style={styles.coffeeName}>{item.name}</Text>
                <Text style={styles.coffeePrice}>{item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity style={styles.qtyButton}>
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyNumber}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.qtyButton}>
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}

      {cartItems.length > 0 && (
        <View style={styles.checkoutContainer}>
          <Text style={styles.subtotal}>Subtotal: ${subtotal}</Text>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => router.push("/(main)/payment")}
          >
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },

  /** HEADER **/
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#f8f8f8",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E3932",
  },
  cartButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  /** Titles **/
  title: { fontSize: 26, fontWeight: "bold", margin: 20, color: "#1E3932" },
  subtitle: { fontSize: 16, color: "#555", textAlign: "center", marginTop: 50 },

  /** Cart Cards **/
  cartCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cartImage: { width: 80, height: 80, borderRadius: 12 },
  cartInfo: { flex: 1, marginLeft: 15, justifyContent: "space-between" },
  coffeeName: { fontSize: 18, fontWeight: "600", color: "#1E3932" },
  coffeePrice: { fontSize: 16, fontWeight: "500", color: "#00704A", marginVertical: 5 },

  /** Quantity Selector **/
  quantityContainer: { flexDirection: "row", alignItems: "center" },
  qtyButton: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  qtyText: { fontSize: 18, fontWeight: "bold", color: "#00704A" },
  qtyNumber: { marginHorizontal: 10, fontSize: 16, fontWeight: "600" },

  /** Checkout **/
  checkoutContainer: {
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
  subtotal: { fontSize: 18, fontWeight: "600", marginBottom: 10, color: "#1E3932" },
  checkoutButton: {
    backgroundColor: "#00704A",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
