import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const API_BASE = "https://your-web-domain.com";

export default function Checkout() {
  const { product } = useLocalSearchParams();
  const [currency, setCurrency] = useState("USD");
  const router = useRouter();

  const handlePay = async () => {
    const res = await fetch(`${API_BASE}/api/payment`, {
      method: "POST",
      body: JSON.stringify({ product, currency })
    });
    const data = await res.json();
    // For mobile, you might open WebView or Linking.openURL
    // Linking.openURL(data.payment_url);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout: {product}</Text>
      <Text style={styles.label}>Currency</Text>

      <View style={styles.chips}>
        {["NGN", "CAD", "USD"].map((c) => (
          <TouchableOpacity
            key={c}
            style={[
              styles.chip,
              currency === c && { backgroundColor: "#22c55e" }
            ]}
            onPress={() => setCurrency(c)}
          >
            <Text
              style={{
                color: currency === c ? "#020617" : "#e5e7eb",
                fontWeight: "500"
              }}
            >
              {c}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePay}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { color: "#e5e7eb", fontSize: 22, fontWeight: "700", marginBottom: 16 },
  label: { color: "#9ca3af", marginBottom: 8 },
  chips: { flexDirection: "row", gap: 8, marginBottom: 24 },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#1f2937"
  },
  button: {
    backgroundColor: "#22c55e",
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center"
  },
  buttonText: { color: "#020617", fontWeight: "600" }
});
