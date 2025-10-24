import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const coffeeList = [
    {
      id: "1",
      name: "Caffè Latte",
      price: "$4.50",
      rating: 4.8,
      image: require("../../assets/images/latte.jpeg"),
    },
    {
      id: "2",
      name: "Cappuccino",
      price: "$4.00",
      rating: 4.6,
      image: require("../../assets/images/cappuccino.webp"),
    },
    {
      id: "3",
      name: "Espresso",
      price: "$3.50",
      rating: 4.7,
      image: require("../../assets/images/espresso.webp"),
    },
    {
      id: "4",
      name: "Iced Americano",
      price: "$4.20",
      rating: 4.5,
      image: require("../../assets/images/iced-americano.png"),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => router.push("/(main)/cart")}
        >
          <MaterialIcons name="shopping-cart" size={28} color="#1E3932" />
        </TouchableOpacity>
      </View>

      {/* Green CTA Card */}
      <View style={styles.ctaCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.ctaTitle}>Order your favorite coffee now!</Text>
          <Text style={styles.ctaSubtitle}>Get 20% off on your first order</Text>
        </View>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push("/(main)/product/1")}
        >
          <Text style={styles.ctaButtonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Original Coffee List (Horizontal Cards) */}
      <FlatList
        data={coffeeList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/(main)/product/${item.id}`)}
          >
            <Image source={item.image} style={styles.coffeeImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.coffeeName}>{item.name}</Text>
              <Text style={styles.coffeePrice}>{item.price}</Text>
              <View style={styles.ratingRow}>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* 🆕 New Layout: Image on top, details below */}
      <Text style={styles.sectionTitle}>Top Picks</Text>
      <View style={styles.gridContainer}>
        {coffeeList.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.verticalCard}
            onPress={() => router.push(`/(main)/product/${item.id}`)}
          >
            <Image source={item.image} style={styles.verticalImage} />
            <View style={styles.verticalInfo}>
              <Text style={styles.coffeeName}>{item.name}</Text>
              <Text style={styles.coffeePrice}>{item.price}</Text>
              <View style={styles.ratingRow}>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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

  /** CTA CARD **/
  ctaCard: {
    backgroundColor: "#00704A",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ctaTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  ctaSubtitle: {
    color: "#e3e3e3",
    fontSize: 14,
  },
  ctaButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: "#00704A",
    fontWeight: "700",
    fontSize: 14,
  },

  /** COFFEE LIST **/
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  coffeeImage: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  cardInfo: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  coffeeName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E3932",
  },
  coffeePrice: {
    fontSize: 16,
    color: "#00704A",
    marginVertical: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    color: "#555",
    fontSize: 14,
  },

  /** NEW GRID STYLE **/
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E3932",
    marginHorizontal: 20,
    marginVertical: 15,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  verticalCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "47%",
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  verticalImage: {
    width: "100%",
    height: 120,
  },
  verticalInfo: {
    padding: 10,
    alignItems: "center",
  },
});
