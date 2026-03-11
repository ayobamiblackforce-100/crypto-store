export function orderReceiptTemplate({ product, amount, currency }) {
  return `
  <div style="font-family:Arial, sans-serif; padding:20px; background:#f8fafc;">
    <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:12px;">
      <h2 style="color:#0f172a;">Thank you for your purchase!</h2>
      <p style="color:#334155;">Here are your order details:</p>

      <div style="margin-top:20px; padding:15px; background:#f1f5f9; border-radius:8px;">
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Amount:</strong> ${amount} ${currency}</p>
      </div>

      <p style="margin-top:20px; color:#334155;">
        If you have any questions, simply reply to this email.
      </p>

      <p style="margin-top:30px; color:#64748b; font-size:12px;">
        CryptoStore • Secure Crypto Payments
      </p>
    </div>
  </div>
  `;
}
