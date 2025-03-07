import React, { useState } from 'react';

const AppTypes = () => {
  return (
    <div>
      <h2>Different Types of Components</h2>
      <h5>Question 1: What are Smart / Stateful / Container Components?</h5>
      {/* 
        Manages state, handles business logic, and passes data down to presentational 
        components.
      */}
      <h5>
        Question 2: What are Dumb / Stateless / Presentational Components?
      </h5>
      {/*
        - Only renders UI based on the props it receives.
        - Doesn't have its own state or lifecycle methods.
      */}{' '}
      <h5>Question 3: What are Higher Order Component (HOC)?</h5>
      {/* 
       - Function that takes a component and returns a new enhanced component.
       - Used for code reuse, logic sharing, and adding additional functionalities to 
       components.
      */}
      <FeatureWithAuth />
      <FeatureWithAuthFn />
      <h5>Question 4: What are Pure Components?</h5>
      {/* 
       - Optimize the rendering performance of components by reducing unnecessary re-renders
      */}
      <Counter />
      <h5>Question 5: What are Controlled Component?</h5>
      {/* 
       - Value of the input field is controlled by React through state.
      */}
      <ControlledInput />
      <h5>Question 6: What are Un-Controlled Component?</h5>
      {/* 
       - Input field maintains its own state using the DOM. 
       - React doesn’t control the value, but it can still interact with the input using refs.
      */}
      <UnControlledInput />
    </div>
  );
};
// class based HOC
const withLogicClass = (WrappedComponent) => {
  return class extends React.Component {
    login() {
      console.log('login successful');
    }
    logout() {
      console.log('logout succesful');
    }
    render() {
      return <WrappedComponent login={this.login} logout={this.logout} />;
    }
  };
};
class FeatureComponentClass extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.login()}>lOGIN</button>
        <button onClick={() => this.props.logout()}>LOGOUT</button>
      </>
    );
  }
}
const FeatureWithAuth = withLogicClass(FeatureComponentClass);

// function based login
const withLoginFn = (WrappedComponent) => {
  return () => {
    function login() {
      // login logic
      console.log('login successfuls');
    }
    function logout() {
      // logout logic
      console.log('Logout successful');
    }
    return <WrappedComponent login={login} logout={logout} />;
  };
};
function FeatureComponentFn(props) {
  return (
    <div>
      <button onClick={() => props.login()}>login</button>
      <button onClick={() => props.logout()}> Logout</button>
    </div>
  );
}
// /
//COUNTER
const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <MemoizedCompClass />
      <MemoizedCompFn />
    </div>
  );
};
// memoised class
// class MemoizedCompClass extends React.Component {
// rendered whenever the increment button click prevention
class MemoizedCompClass extends React.PureComponent {
  render() {
    console.log('class component rendered counter render');

    return <div>Pure CLass Component</div>;
  }
}
// function to memoize the render whenever the increment button is click there is no
// render for this function only once
const MemoizedCompFn = React.memo(() => {
  console.log('fn rendered only when initially whent he button clicked');
  return <div>Pure Fn Component</div>;
});
// conrolled component
const ControlledInput = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // input -> state -> input -> state

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
};
//
// uncontrolled component
const UnControlledInput = () => {
  const inputRef = React.useRef(null);

  function handleClick() {
    console.log(inputRef?.current?.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
};

//
const FeatureWithAuthFn = withLoginFn(FeatureComponentFn);
export default AppTypes;
