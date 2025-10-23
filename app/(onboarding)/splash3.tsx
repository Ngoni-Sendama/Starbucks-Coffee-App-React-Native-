import { View, Text, Button, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

export default function Splash3() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../../assets/images/splash3.png")}
        style={styles.image}
      /> */}
      <Image
        source={require("../../assets/images/splash-icon.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>Now get your coffee and enjoy!</Text>

      <Button
        title="Get Started"
        onPress={() => router.replace("/(auth)/login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 250, height: 250, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { color: "#555", marginBottom: 20 },
});
