// this is how a react looks like

function Counter() {
  // state what react allows reactivity and speed to react about change to trigger ui changes
  const [count, setCount] = React.useState(0);
  //   whenever the state changes re render whole component
  const increment = () => {
    setCount(count + 1);
  };
  //   return React.createElement(
  //     'div',
  //     null, //props
  //     React.createElement('p', null, `Count:${count}`),
  //     React.createElement('button', { onClick: increment }, `Increment`)
  //   );
  return (
    <div>
      <p>Count is {count}</p>
      {/* working fine with babel cdn */}
      <button onClick={increment}>Counter</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Counter));
