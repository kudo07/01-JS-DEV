// this is how a react looks like

function Counter() {
  // state what react allows reactivity and speed to react about change to trigger ui changes
  const [count, setCount] = React.useState(0);
  let count1 = 0;

  //   whenever the state changes re render whole component
  const increment = () => {
    setCount(count + 1);
    count1 += 1;
  };
  console.log(count1);

  return <div></div>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Counter));
