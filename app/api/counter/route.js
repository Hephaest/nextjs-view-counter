const firebaseUrl = `${process.env.FIRE_BASE_URL}/counters.json`;
const shieldsUrl = `${process.env.SHIELDS_IO_URL}?color=lightgrey&style=flat-square&label=Views`;

export async function GET() {
  const response = await fetch(firebaseUrl);
  const jsonData = await response.json();
  const { counter } = jsonData;
  const nextCounter = counter + 1;

  fetch(firebaseUrl, {
    method: "PUT",
    body: JSON.stringify({ counter: nextCounter }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const imgResponse = await fetch(`${shieldsUrl}&message=${nextCounter}`);

  const imgData = await imgResponse.text();

  return new Response(imgData, {
    status: 200,
    headers: {
      "content-type": "image/svg+xml",
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "expires": "0",
    },
  });
}
