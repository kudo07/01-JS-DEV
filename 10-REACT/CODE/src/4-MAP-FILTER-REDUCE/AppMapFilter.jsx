import React from 'react';

const AppMapFilter = () => {
  const products = [
    { id: 1, name: 'Product A', price: 20, category: 'Electronics' },
    { id: 2, name: 'Product B', price: 30, category: 'Clothing' },
    { id: 3, name: 'Product C', price: 15, category: 'Electronics' },
    { id: 4, name: 'Product D', price: 25, category: 'Clothing' },
    { id: 5, name: 'Product E', price: 50, category: 'Electronics' },
    { id: 6, name: 'Product F', price: 40, category: 'Electronics' },
  ];

  const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob'];
  return (
    <>
      <h5></h5>
      <h1>Rendering Lists and Conditional Operators</h1>
      <h5>
        Question 1: How does the map function work in React for rendering lists?
        Can you provide an example?
      </h5>
      {/* COMMONLY USED TO ITERATE THROUGH AN ARRAY AND RENDER COMPONENTS DYNAMICALLY
      IT ALLOWS YOU TO CREATE A NEW ARRAY OF REACT ELEMENT BASED ON THE ORIGINAL ARRAY
       */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <h5>Question 2: How can you filter products with a specific category?</h5>
      <ul>
        {products
          .filter((product) => product.category === 'Electronics')
          .map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
      <h5>
        Question 3: How can you Render a summary of total prices for products?
      </h5>
      total price are: ${' '}
      {products.reduce((acc, product) => {
        return acc + product.price;
      }, 0)}
      <h5>
        Question 4: Add discountedPrice key with 10% discount to all the
        products with price more than $20 and render it.
      </h5>
      <ul>
        {products
          .filter((product) => product.price > 20)
          .map((product) => {
            return { ...product, disCountedPrice: product.price * (10 / 100) };
          })
          .map((product) => {
            return (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.discountedPrice} -
                Discounted from: {product.price}
              </li>
            );
          })}
      </ul>
      <h5>
        Question 5: How can you filter and render unique elements from an array
        using filter in React?
      </h5>
      {names
        .filter((name, index) => {
          return names.indexOf(name) === index;
        })
        .map((name) => {
          return <li>{name}</li>;
        })}
    </>
  );
};

export default AppMapFilter;
