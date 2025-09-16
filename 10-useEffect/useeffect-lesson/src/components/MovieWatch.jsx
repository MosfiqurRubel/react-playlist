import { useState, useEffect } from "react";

const MovieWatch = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      className="border px-2 py-1 rounded"
    />
  );
};

export default MovieWatch;
