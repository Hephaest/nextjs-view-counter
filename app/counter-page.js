"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const updateCounterHandler = async (data) => {
  fetch("/api/counter", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function CounterPage(props) {
  const { counter: initialCounter } = props;
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    setCounter((preCounter) => {
      const newCounter = preCounter + 1;
      updateCounterHandler({ counter: newCounter });
      return newCounter;
    });
  }, []);

  return (
    <Image
      src={`https://img.shields.io/static/v1?color=lightgrey&style=flat-square&label=Views&message=${counter}`}
      alt="view badge"
      height={20}
      width={80}
    />
  );
}
