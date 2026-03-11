import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CryptoStore</Text>
      <Text style={styles.subtitle}>
        Buy BTC, ETH, USDT with NGN, CAD & USD.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Link href="/products" style={styles.buttonText}>
          View Products
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  title: { fontSize: 32, fontWeight: "700", color: "#e5e7eb" },
  subtitle: {
    marginTop: 12,
    fontSize: 14,
    color: "#9ca3af"
  },
  button: {
    marginTop: 24,
    backgroundColor: "#22c55e",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "flex-start"
  },
  buttonText: { color: "#020617", fontWeight: "600" }
});
