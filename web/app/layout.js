import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Crypto Store",
  description: "Buy BTC, ETH, USDT with NGN, CAD, USD"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
