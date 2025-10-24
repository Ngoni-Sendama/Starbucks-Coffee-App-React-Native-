// product/ProductDetail.js
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  const images = {
    "1": require("../../../assets/images/latte.jpeg"),
    "2": require("../../../assets/images/cappuccino.webp"),
    "3": require("../../../assets/images/espresso.webp"),
    "4": require("../../../assets/images/iced-americano.png"),
  };

  const coffeeList = {
    "1": {
      name: "Caffè Latte",
      price: "$4.50",
      rating: 4.8,
      description:
        "A smooth blend of espresso and steamed milk, topped with a light layer of foam. Perfect for a gentle coffee experience.",
    },
    "2": {
      name: "Cappuccino",
      price: "$4.00",
      rating: 4.6,
      description:
        "A classic Italian coffee drink with rich espresso, steamed milk, and a deep layer of foam for a balanced taste.",
    },
    "3": {
      name: "Espresso",
      price: "$3.50",
      rating: 4.7,
      description:
        "Pure espresso shot — bold, rich, and aromatic. For those who love the authentic taste of strong coffee.",
    },
    "4": {
      name: "Iced Americano",
      price: "$4.20",
      rating: 4.5,
      description:
        "A refreshing mix of espresso and cold water over ice. Crisp, smooth, and perfect for hot days.",
    },
  };

  const product = coffeeList[id];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image source={images[id]} style={styles.image} resizeMode="contain" />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>{product.price}</Text>
          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={20} color="#FFD700" />
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity style={styles.button}>
          <LinearGradient colors={["#00704A", "#0d8b61"]} style={styles.signIn}>
            <Text style={styles.textSign}>Add to Cart</Text>
            <MaterialIcons name="shopping-cart" color="#fff" size={20} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#00704A" },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  name: {
    color: "#1E3932",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  price: { fontSize: 22, fontWeight: "700", color: "#00704A" },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  rating: { marginLeft: 5, fontSize: 18, color: "#555" },
  description: { fontSize: 16, color: "#555", lineHeight: 22, marginBottom: 25 },
  button: { alignItems: "center", marginTop: 10 },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
  },
  textSign: { color: "#fff", fontWeight: "bold", fontSize: 18, marginRight: 8 },
});
