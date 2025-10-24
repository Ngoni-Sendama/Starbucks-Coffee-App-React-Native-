import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Splash1() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash1.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Starbucks</Text>
      <Text style={styles.subtitle}>Morning relief after waking up</Text>

      <Link href="/(onboarding)/splash3" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8", // soft neutral background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  image: {
    width: 260,
    height: 260,
    marginBottom: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1E3932", // Starbucks deep green
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B705C", // soft gray-green
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#00704A", // Starbucks signature green
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 30,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
