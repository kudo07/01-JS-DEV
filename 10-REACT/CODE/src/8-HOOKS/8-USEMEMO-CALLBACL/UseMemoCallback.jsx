import React, { useCallback, useState } from 'react';

const UseMemoCallback = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  // expensinve function`

  const squareValue = () => {
    console.log('expensive calculation', counter2);
    return counter * counter;
    // even click counter it still render
  };

  //
  const squaredValueUseMemo = useMemo(squareValue, [counter]);
  // only render when the counter changes no memoise or return same value if the empty
  const squaredValueUseCallback = useCallback(squareValue, [counter]);
  return (
    <div>
      <h3>useMemo and useCallback Hooks</h3>
      <h2>Question 1: What is useMemo in React?</h2>
      <h4>
        it is a hook used to memouze the result of a function and cache it,
        recalculating it only if the dependencies change
      </h4>
      <h2>SQUARED COUNTER:{squaredValueUseMemo}</h2>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter2(counter - 1)}> dec</button>
      <h5>Question 2: When should you use useMemo Hook?</h5>
      {/* 
        - When computing a value is expensive or time-consuming.
        - When you want to prevent unnecessary re-computation of values across re-renders.
    */}
      <h5>Question 3: How does useMemo differ from useState?</h5>
      {/* 
      useMemo memoizes a computed value and returns the cached value without causing re-renders,
      while useState manages state and triggers re-renders when the state changes.
    */}{' '}
      <h5>
        Question 4: What is useCallback in React? How is it diffrent from
        useMemo ?
      </h5>
      {/* 
        It is hook used to memoize a provided callback function, returning the memoized version
        of the function.
    */}{' '}
      <h2>Squared Counter: {squaredValueUseMemo}</h2>
      <h2>Squared Counter: {squaredValueUseCallback()}</h2>
      <h5>
        Question 5: What happens when you use useCallback with empty
        dependencies?
      </h5>
      {/* 
        It will return the same memoized function on every render, which might be useful 
        for performance optimization.
    */}
      <h5>Question 6: When should u not use useCallback or useMemo?</h5>
      {/* 
        - Event Handlers or Inline Functions
        - Excessive Memory Consumption
        - Garbage Collection Concerns
      */}
    </div>
  );
};

export default UseMemoCallback;
