import Stripe from "stripe";
import { sendEmail } from "@/lib/email";
import { orderReceiptTemplate } from "@/lib/templates/orderReceipt";
import { prisma } from "@/lib/db";

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  const stripe = new Stripe(process.env.STRIPE_SECRET);

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return new Response(`Webhook error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Save order to DB
    await prisma.order.create({
      data: {
        product: session.metadata.product,
        currency: session.currency.toUpperCase(),
        amount: session.amount_total / 100,
        status: "paid",
        email: session.customer_details.email
      }
    });

    // Send receipt to customer
    await sendEmail({
      to: session.customer_details.email,
      subject: "Your CryptoStore Receipt",
      html: orderReceiptTemplate({
        product: session.metadata.product,
        amount: session.amount_total / 100,
        currency: session.currency.toUpperCase()
      })
    });

    // Notify admin
    await sendEmail({
      to: "admin@yourdomain.com",
      subject: "New Order Received",
      html: `<p>New order for ${session.metadata.product} (${session.currency.toUpperCase()})</p>`
    });
  }

  return new Response("OK", { status: 200 });
}
