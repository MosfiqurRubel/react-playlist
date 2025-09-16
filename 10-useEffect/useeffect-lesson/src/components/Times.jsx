import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Timer stopped ⏱️");
    };
  }, []);

  return <h2>Time: {time}</h2>;
};

export default Timer;
