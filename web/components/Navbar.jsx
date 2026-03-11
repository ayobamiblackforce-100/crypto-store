import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
          <span className="font-semibold text-lg">CryptoStore</span>
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/products" className="hover:text-emerald-400">
            Products
          </Link>
          <Link href="/admin" className="hover:text-emerald-400">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
