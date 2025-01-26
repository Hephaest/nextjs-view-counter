const firebaseUrl = `${process.env.FIRE_BASE_URL}/counters.json`;
const shieldsUrl = `${process.env.SHIELDS_IO_URL}?color=lightgrey&style=flat-square&label=Views`;

export async function GET() {
  const response = await fetch(firebaseUrl);
  const jsonData = await response.json();
  const { counter } = jsonData;

  fetch(firebaseUrl, {
    method: "PUT",
    body: JSON.stringify({ counter: counter + 1 }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const imgResponse = await fetch(`${shieldsUrl}&message=${counter}`);

  const imgData = await imgResponse.text();

  return new Response(imgData, {
    status: 200,
    headers: { "content-type": "image/svg+xml" },
  });
}

export async function PUT(request) {
  const data = await request.json();
  fetch(firebaseUrl, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return new Response(JSON.stringify({ message: "success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
