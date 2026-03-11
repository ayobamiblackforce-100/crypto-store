import Link from "next/link";

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center mt-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Buy <span className="text-emerald-400">BTC, ETH, USDT</span> with
          NGN, CAD & USD.
        </h1>
        <p className="mt-4 text-slate-300">
          Simple, transparent pricing powered by live market data. Pay with
          trusted gateways like Stripe, Flutterwave, and Paystack.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/products"
            className="px-5 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400"
          >
            View Products
          </Link>
          <Link
            href="/admin"
            className="px-5 py-3 rounded-lg border border-slate-700 hover:border-emerald-400"
          >
            Admin Dashboard
          </Link>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
        <p className="text-sm text-slate-400 mb-2">Live snapshot</p>
        <div className="grid gap-4">
          {["Bitcoin", "Ethereum", "Tether"].map((name) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 border border-slate-800"
            >
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-xs text-slate-400">Updated in real time</p>
              </div>
              <span className="text-emerald-400 text-sm">Live price</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
