import { useEffect, useState } from "react";

const StateChangeEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="text-center">
      <h2>{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        ++
      </button>
    </div>
  );
};
export default StateChangeEffect;
