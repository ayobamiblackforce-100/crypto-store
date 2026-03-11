"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg hover:border-emerald-400 transition">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-xs text-slate-400 mb-4">Live market price</p>

      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="bg-slate-900 rounded-lg p-2">
          <p className="text-slate-400 text-xs">USD</p>
          <p className="font-semibold">${product.price.usd}</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-2">
          <p className="text-slate-400 text-xs">CAD</p>
          <p className="font-semibold">${product.price.cad}</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-2">
          <p className="text-slate-400 text-xs">NGN</p>
          <p className="font-semibold">₦{product.price.ngn}</p>
        </div>
      </div>

      <Link
        href={`/checkout?product=${product.name}`}
        className="mt-5 inline-flex items-center justify-center w-full rounded-lg bg-emerald-500 text-slate-950 font-semibold py-2.5 hover:bg-emerald-400"
      >
        Buy {product.name}
      </Link>
    </div>
  );
}
