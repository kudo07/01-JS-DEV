import React, { useState } from 'react';

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  // 2- const
  const handleIncrement = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // render only once

    // render as sync and updates count as the number of increses

    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <h3>USESTATE HOOK</h3>
      <h2>Q-1 WHAT IS USE STATE HOOK</h2>
      <p>
        usestate is a hook in react that allows functional component to manage
        state by declaring state variables and providing a function to update
        them
      </p>
      <p>Count:{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <h5>Question 2: Whats the Output and How to fix this?</h5>
      <button onClick={handleIncrement}>Increment by 3</button>{' '}
      <h5>
        Question 3: What is Two Way Data Binding and How can you achieve it in
        react?
      </h5>
      {/* 
      - It is a concept that allows the synchronization of data between the model (or state) 
      and the view in both directions.
      - You can achieve it by combining state management with controlled components.
    */}
      <p>INPUT VALUE:{value}</p>
      <input
        type="text"
        value={value}
        className="border-4 border-gray-400"
        onChange={(e) => setValue(e.target.value)}
      />
      <h5>
        Question 4: Build a Form containing First name, last name and email. Use
        only one state to manage all fields.
      </h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="enter firstname"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="enter lastname"
          onChange={handleInputChange}
        />{' '}
        <input
          type="email"
          name="email"
          placeholder="enter email"
          onChange={handleInputChange}
        />
        <button className="submit">submit</button>
      </form>
    </div>
  );
};

export default UseStateHook;
