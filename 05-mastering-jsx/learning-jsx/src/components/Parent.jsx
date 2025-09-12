import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div className="flex flex-col justify-center items-center m-3">
      <h2>Count in parent: {count}</h2>
      <button
        className="bg-teal-700 text-white p-1 rounded-sm"
        onClick={incrementCount}
      >
        Increment Count(Parent)
      </button>
      <Child count={count} onIncrementCount={incrementCount} />
    </div>
  );
}

export default Parent;
