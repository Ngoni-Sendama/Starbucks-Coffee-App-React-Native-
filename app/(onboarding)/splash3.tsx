import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Splash3() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash-icon.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>Now get your coffee and enjoy!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/(auth)/login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8", // clean neutral background
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
    color: "#1E3932", // Starbucks dark green
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
    elevation: 3, // subtle Android shadow
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
