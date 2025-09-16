import Basics from "./components/Basics";
import Counter from "./components/Counter";
import { useEffect } from "react";
import StateChangeEffect from "./components/StateChangeEffect";
import PropsChangeEffect from "./components/PropsChangeEffect";
import CleanupEffect from "./components/CleanupEffect";
import Parent from "./components/effectree/Parent";
import Timer from "./components/Times";
import MovieWatch from "./components/MovieWatch";

function App() {
  useEffect(() => {
    console.log("Component Mounted ✅");
  }, []);
  // return <Counter />;
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">useEffect</h1>
      <Counter />
      <Basics />
      <StateChangeEffect />
      <PropsChangeEffect userId={3} />
      <CleanupEffect />

      <Parent />
      <Timer />
      <MovieWatch />
    </div>
  );
}

export default App;
