import { useEffect, useState } from 'react';

const useDebounce = (value, delay, callback = () => {}) => {
  const [debounceVal, setDebounceVal] = useState('');
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value);
      callback();
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounceVal;
};

export default useDebounce;
