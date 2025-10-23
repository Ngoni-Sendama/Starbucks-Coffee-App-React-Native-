import { View, Text, Button, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Splash1() {
  return (
    <View style={styles.container}>
      {/* <Image source={require("../../assets/images/splash1.png")} style={styles.image} /> */}
      <Image
        source={require("../../assets/images/splash-icon.png")}
        style={styles.image}
      />
      <Text style={styles.title}>StarBucks</Text>
      <Text style={styles.subtitle}>Morning relief after waking up</Text>
      <Link href="/(onboarding)/splash3" asChild>
        <Button title="Next" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 250, height: 250, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { color: "#555", marginBottom: 20 },
});
