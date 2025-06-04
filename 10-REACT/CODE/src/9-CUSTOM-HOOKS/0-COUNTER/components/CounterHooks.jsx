import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterHooks = () => {
  const { count, increaseCount, decreaseCount, reset } = useCounter();
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={() => increaseCount(1)}>inc</button>
      <br />
      <button onClick={() => decreaseCount(2)}>decrease</button>
      <br />
      <button onClick={() => reset()}>reset</button>
      <br />
    </div>
  );
};

export default CounterHooks;
