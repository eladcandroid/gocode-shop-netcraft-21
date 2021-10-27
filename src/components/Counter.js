import { useState } from "react";

function Counter() {
  console.log("Counter rerendered");
  const [count, setCount] = useState(10);

  const myLongFunc = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={myLongFunc}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
