import React, { useRef, useState } from 'react';

const UseRefHook = () => {
  // 1-
  const ref = useRef(0);
  const [count, setCount] = useState(0);
  //   2-
  const inputRef = useRef(null);
  return (
    <div>
      <h3>
        <u>useRef Hook</u>
      </h3>
      <h5>Question 1: What is useRef in React?</h5>
      {/*- useRef hook is a hook to create a mutable reference that persist across renders 
        -it returns a mutable object with a '.current' property
        */}
      <p>ref value: {ref.current} </p>
      {/* ref.current is the value inside the useRef() hook */}
      <button onClick={() => (ref.current += 1)}>INC REF VALUE</button>
      {/* RENDER NOT HAPPEN WHEN WE CLICK IT PERSIST VALUE */}
      <p>state value:{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        INC STATE VALUE
      </button>
      {
        /* WHEN WE CLICK THE PREVIOUS VALUE CLICK OF THE REF INCREASES TO THAT POINT WHERE 
      THE NUMBER OF CLICK PRESS BEFORE
      
      */ <h5>Question 1: What is useRef in React?</h5>
      }
      {/* 
        - Accessing DOM elements or managing focus.
        - Storing mutable values that persist without causing re-renders.
        - Caching values to avoid re-initialization on re-renders.
      */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = 5;
        }}
        // in input we access the value in tree via .cuurent.value
      >
        setFocus
      </button>{' '}
      <h5>Question 3: How do you access a DOM element using useRef?</h5>
      <input ref={inputRef} />
      <h5>Question 4: Difference between useState and useRef?</h5>
      {/* 
        - useState
            Manages state and triggers re-renders when its value changes. When you update it using 
            setStateValue, the component re-renders, and the updated value is reflected in the UI.
        - useRef
            Holds a mutable value (current) that persists across renders without causing re-renders. 
            When you update it (refValue.current = ...), the component doesn't re-render, 
            but the updated value is stored and accessible across renders.
      */}
    </div>
  );
};

export default UseRefHook;
