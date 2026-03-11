"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    fetch("/api/prices")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  if (!prices) return <p>Loading prices...</p>;

  const products = [
    { id: "btc", name: "Bitcoin", price: prices.bitcoin },
    { id: "eth", name: "Ethereum", price: prices.ethereum },
    { id: "usdt", name: "Tether (USDT)", price: prices.tether }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
