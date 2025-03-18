import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [user, setUser] = useState({});
  // 1
  useEffect(
    () => {
      // side effec code here
      return () => {
        // cleanup code (optional)
        // runs on component unmount when remove the component or before re-runs
      };
    },
    [
      //dependendcy
    ]
  );
  // 3
  const fetchUser = async () => {
    const res = await fetch('https://random-data-api.com/api/v2/users');
    const data = await res.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h3>
        <u>useEffect Hook</u>
      </h3>{' '}
      <h5>Question 1: What is useEffect in React?</h5>
      {/*
       - useEffect is a hook used in functional components to perform side effects after
       rendering, such as data fetching, subscriptions, or manual DOM manipulation.
      */}
      <h5>Question 2: Why is dependency array used in useEffect?</h5>
      {/* 
        - When it empty, it runs only once
        - When these values inside it change, the effect is re-run.
        - If removed, the effect runs after every render.
        
        - Handling dependencies ensures that the effect runs only when necessary and prevents
        unnecessary re-execution of the effect, optimizing performance and avoiding
        potential bugs.
      */}
      <h5>Question 3: Example of useEffect for data fetching.</h5>
      <p>
        {user.first_name} {user.last_name}
      </p>{' '}
      <h5>
        Question 4: Convert major lifecycle methods to useEffect and Explain.
      </h5>
      {/* Explained in previous lessons */}{' '}
      <h5>
        Question 5: How to perform cleanup in useEffect? Explain with example.
      </h5>
      {/* 
      - You can return a cleanup function inside useEffect, which runs before the effect 
      re-runs or when the component unmounts. 
      - This is useful for cleaning up subscriptions or event listeners.
    */}
    </div>
  );
};

export default UseEffectHook;
