import React, { useReducer } from 'react';

const UseReducerHook = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DECREMENT':
        return {
          // state is in objects
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
  const initialCount = {
    count: 0,
  };
  const [state, dispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <h1>USEREDUCER HOOK</h1>
      <h2>Question 1: What is useReducer in React?</h2>
      <h3>
        it is a hook used for managinf complex state logic by utilising a
        reducer funciton.
        <br />
        alternative to useState and provide a way to update state based on
        defined actions.
      </h3>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>ADD</button>
      <br />
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>DEC</button>
      {/*  */}
      <h5>Question 2: When should you use useReducer instead of useState?</h5>
      <h3>
        - When managing complex state transitions or logic that involves
        multiple sub-values. - When state logic follows a pattern or when
        multiple actions need to update the state in predictable ways.
      </h3>
      <ShoppingCart />
    </div>
  );
};

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      break;
  }
};

const products = [
  { id: 1, Name: 'Product 1' },
  {
    id: 2,
    Name: 'product 2',
  },
  {
    id: 3,
    Name: 'product 3',
  },
  {
    id: 4,
    Name: 'product 4',
  },
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
            >
              {item.Name}
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
      {products.map((prod) => (
        <button
          key={prod.id}
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: prod })}
        >
          {prod.Name}
        </button>
      ))}
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        clear cart
      </button>
    </div>
  );
};

export default UseReducerHook;
