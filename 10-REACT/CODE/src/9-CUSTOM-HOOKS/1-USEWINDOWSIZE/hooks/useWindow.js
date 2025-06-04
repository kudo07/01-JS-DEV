import { useEffect, useState } from 'react';

const useWindow = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerWidth,
  });
  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);
  return windowSize;
};

export default useWindow;
