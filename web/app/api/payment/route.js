const session = await stripe.checkout.sessions.create({
  ...
  metadata: {
    product,
    email
  }
});
