import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log('event triggered count', count);
  }, []);
  console.log('rendered');

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const Increment = () => {
    setCount1((prev) => prev + 1);
  };
  const Decrement = () => {
    setCount1((prev) => prev - 1);
  };
  //   when the dependecy is the count and click on count1 rendered happend but the event triggered is not run
  // when the dependency is the count and click on count rendered and event triggered runs
  //   rendered happen because state is changes because of clicck on count or count1
  // when the dependency is empty every time render happen effect gonna and run and print event got triggered
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>increment count</button>
      <br />
      <button onClick={Increment}>increment Count1</button>
      <br />
      <button onClick={decrement}>decrement count</button>
      <br />
      <button onClick={Decrement}>decrement count1</button>
      <br />
    </div>
  );
};

export default Counter;
