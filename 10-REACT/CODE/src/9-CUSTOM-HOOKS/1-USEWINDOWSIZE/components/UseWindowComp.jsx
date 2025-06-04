import React from 'react';
import useWindow from '../hooks/useWindow';

const UseWindowComp = () => {
  const { width, height } = useWindow();
  return (
    <div>
      <p>width:{width}</p>
      <p>width:{height}</p>
    </div>
  );
};

export default UseWindowComp;
