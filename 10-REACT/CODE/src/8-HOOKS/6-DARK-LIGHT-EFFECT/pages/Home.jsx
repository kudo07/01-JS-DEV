import React from 'react';
import { useTheme } from '../context/theme-context';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`page ${theme}`}>
      <h1>Home </h1>
      <p>welcome to the home page</p>
    </div>
  );
};

export default Home;
