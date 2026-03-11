export async function POST(req) {
  const { product, currency } = await req.json();

  let payment_url = "";

  if (currency === "NGN") {
    // Flutterwave or Paystack
    payment_url = "https://flutterwave.com/pay/your-link";
  }

  if (currency === "CAD") {
    // Stripe Checkout
    payment_url = "https://checkout.stripe.com/pay/your-session";
  }

  if (currency === "USD") {
    // Stripe or PayPal
    payment_url = "https://paypal.com/checkout/your-id";
  }

  return Response.json({ payment_url });
}
