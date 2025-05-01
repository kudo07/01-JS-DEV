import React, { useState } from 'react';

const CounterWays = () => {
  const [counter, setCounter] = useState(0);
  const [counterO, setCounterO] = useState(100);

  const showRender = () => {
    console.log('expensive function', counterO, 'is running');
    return counter * counter;
  };
  // if i update it with dependncy with counter then only change when the counter changes

  return (
    <div>
      <h1>Testing UI</h1>
      <p>Counter: {counter}</p>
      <p>CounterO: {counterO}</p>
      {/* first render because of this */}
      <p>Result of showRender(): {showRender()}</p>

      <button onClick={() => setCounter(counter + 1)}>Inc Counter</button>
      <br />
      <button onClick={() => setCounterO(counterO - 1)}>Dec CounterO</button>
    </div>
  );
};

export default CounterWays;
