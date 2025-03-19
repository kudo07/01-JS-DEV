import React, { useEffect, useState } from 'react';
import useEffectPollyfill from './hooks/use-custom-effect';

const Counter = () => {
  const [count, setCount] = useState(0);
  //   whenevert he state changes it re render the component
  const [count1, setCount1] = useState(0);
  useEffectPollyfill(() => {
    console.log('Event triggered', count);
    return () => {
      // yes this is a function which i passed to the polyfil
      console.log('cleanup');
    };
  }, [count]);
  // event trigger when the count changes as well as render happend because of state changes
  // useEffect(() => {
  //   console.log('event triggered count', count);
  //   return () => {
  //     // only run when the state of dependency changes or the component get unmounted means remove comment the component in the app.jsx
  //     console.log('clean up');
  //     // only show clean when component unmounts or state fo dependency changes
  //   };
  // }, [count]);
  //it runs the very first time on mounting because of empty braces then it wont
  //   triggered the useeffect whenever the state changes of any of the component
  //   effect trigered on the very first time and it then rendered whenevert he state changes but it wont render the trigger
  //   it wont trigger eanymore
  //when i put the count in the dependency array every single render when the state changes of count
  // triggered hapen
  // if i click count1 render happen because of state change but event triggered not happen because is depend on the state of count
  //remove the array
  // every single time render happen triggered allso happen means useeffect also run
  // when the dependecy array is not there it got triggered every single time
  //
  console.log('rendered');

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const Increment = () => {
    setCount1((prev) => prev + 1);
  };
  const Decrement = () => {
    setCount1((prev) => prev - 1);
  };
  //   when the dependecy is the count and click on count1 rendered happend but the event triggered is not run
  // when the dependency is the count and click on count rendered and event triggered runs
  //   rendered happen because state is changes because of clicck on count or count1
  // when the dependency is empty every time render happen effect gonna and run and print event got triggered
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>increment count</button>
      <br />
      <button onClick={Increment}>increment Count1</button>
      <br />
      <button onClick={decrement}>decrement count</button>
      <br />
      <button onClick={Decrement}>decrement count1</button>
      <br />
    </div>
  );
};

export default Counter;
