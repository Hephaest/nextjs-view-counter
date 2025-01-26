// Import your Client Component
import CounterPage from "./counter-page";

const firebaseUrl = `${process.env.FIRE_BASE_URL}/counters.json`;

const getCounterHandler = async () => {
  const response = await fetch(firebaseUrl);
  const jsonData = await response.json();
  const { counter } = jsonData;
  return counter;
};

export default async function Page() {
  // Fetch data directly in a Server Component
  const counter = await getCounterHandler();
  // Forward fetched data to your Client Component
  return <CounterPage counter={counter} revalidate={1} />;
}
