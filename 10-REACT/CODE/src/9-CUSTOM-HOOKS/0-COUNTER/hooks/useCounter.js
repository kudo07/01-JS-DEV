import { useState } from 'react';

const useCounter = (initialCounter = 0, step = 1) => {
  const [count, setCount] = useState(initialCounter);
  const increaseCount = () => {
    setCount(count + step);
  };
  const decreaseCount = () => {
    setCount(count - step);
  };
  const reset = () => {
    setCount(0);
  };
  return { count, increaseCount, decreaseCount, reset, count };
};

export default useCounter;
