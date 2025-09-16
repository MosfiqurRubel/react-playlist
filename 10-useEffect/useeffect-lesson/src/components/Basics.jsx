import { useEffect, useState } from "react";

const Basics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // side Effect Logic
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      {data ? <p>{data?.title}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Basics;
