import { useState, useEffect } from 'react';
import Image from 'next/image'

const firebaseUrl = `${process.env.FIRE_BASE_URL}/counters.json`;

const getCounterHandler = async () => {
  const response = await fetch(firebaseUrl);
  const jsonData = await response.json();
  const { counter } = jsonData;
  return counter;
}

const updateCounterHandler = async (data) => {
  fetch('/api/counter', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

const CounterPage = (props) => {

  const { counter: initialCounter } = props;
  const [ counter, setCounter ] = useState(initialCounter);

  useEffect(() => {
    setCounter(preCounter => {
      const newCounter = preCounter + 1;
      updateCounterHandler({ counter: newCounter });
      return newCounter;
    });
  }, []);

  return (
    <Image src={`https://img.shields.io/static/v1?color=lightgrey&style=flat-square&label=Views&message=${ counter }`} alt="view badge" height={20} width={80} />
  )
}

export const getStaticProps = async () => {
  const counter = await getCounterHandler();
  return {
    props: { counter },
    revalidate: 1,
  }
};

export default CounterPage;