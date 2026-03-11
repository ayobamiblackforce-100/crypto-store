const [email, setEmail] = useState("");

...

<input
  type="email"
  placeholder="Your email"
  className="border p-2 rounded w-full mt-4"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<button
  onClick={() => handlePayment(email)}
  className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
>
  Pay Now
</button>
