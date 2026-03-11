import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const API_BASE = "https://your-web-domain.com"; // same backend as web

export default function Products() {
  const [prices, setPrices] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`${API_BASE}/api/prices`)
      .then((res) => res.json())
      .then(setPrices);
  }, []);

  if (!prices) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#e5e7eb" }}>Loading prices...</Text>
      </View>
    );
  }

  const products = [
    { id: "btc", name: "Bitcoin", price: prices.bitcoin },
    { id: "eth", name: "Ethereum", price: prices.ethereum },
    { id: "usdt", name: "Tether (USDT)", price: prices.tether }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/checkout",
                params: { product: item.name }
              })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>USD: ${item.price.usd}</Text>
            <Text style={styles.price}>CAD: ${item.price.cad}</Text>
            <Text style={styles.price}>NGN: ₦{item.price.ngn}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#020617",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1f2937"
  },
  name: { color: "#e5e7eb", fontSize: 18, fontWeight: "600" },
  price: { color: "#9ca3af", marginTop: 4 }
});
