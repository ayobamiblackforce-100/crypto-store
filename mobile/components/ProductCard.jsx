"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">{product.name}</h2>

      <div className="mt-2">
        <p>USD: ${product.price.usd}</p>
        <p>CAD: ${product.price.cad}</p>
        <p>NGN: ₦{product.price.ngn}</p>
      </div>

      <Link
        href={`/checkout?product=${product.name}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Buy Now
      </Link>
    </div>
  );
}
