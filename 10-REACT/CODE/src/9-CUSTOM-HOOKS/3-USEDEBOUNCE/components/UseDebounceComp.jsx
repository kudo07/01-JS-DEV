import React from 'react';
import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const UseDebounceComp = () => {
  const [inputVal, setInputVal] = useState('');
  const debounceVal = useDebounce(inputVal, 1000, () => {
    console.log('finction call');
  });
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <div>
      <p>{debounceVal}</p>
      <input
        type="text"
        value={inputVal}
        onChange={handleChange}
        className="boder border-2"
      />
    </div>
  );
};

export default UseDebounceComp;
