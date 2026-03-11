export async function GET() {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd,cad,ngn";

  const res = await fetch(url, { next: { revalidate: 30 } }); // cache 30s
  const data = await res.json();

  return Response.json(data);
}
