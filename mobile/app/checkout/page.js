"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const params = useSearchParams();
  const product = params.get("product");

  const [currency, setCurrency] = useState("USD");

  const handlePayment = async () => {
    const res = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ product, currency }),
    });

    const data = await res.json();
    window.location.href = data.payment_url;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout: {product}</h1>

      <label className="block mt-4">Choose Currency</label>
      <select
        className="border p-2"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="NGN">Naira (NGN)</option>
        <option value="CAD">Canadian Dollar (CAD)</option>
        <option value="USD">US Dollar (USD)</option>
      </select>

      <button
        onClick={handlePayment}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}
