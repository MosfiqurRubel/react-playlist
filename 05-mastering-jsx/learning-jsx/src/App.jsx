import { SquarePlay } from "lucide-react";
import Avatar from "./components/Avatar";
import Items from "./components/items";
import Post from "./components/Post";
import Parent from "./components/Parent";

function App() {
  const goals = [
    { id: 1, text: "Learn React like a Jordan Walk" },
    { id: 2, text: "Get Stronger in JavaScript" },
    { id: 3, text: "Be Master of Problem Solving" },
  ];

  const todo = [
    { id: "a", text: "Pray" },
    { id: "b", text: "Read Quran" },
    { id: "c", text: "Practice Coding" },
    { id: "d", text: "Go for a Walk" },
  ];

  return (
    <div className="p-4 space-y-4">
      <Avatar />
      <Items
        items={goals}
        className="text-lg font-semibold"
        itemClass="text-blue-600"
      />
      <Items items={todo} className="text-md" itemClass="text-green-700" />

      <Post />

      <Parent />
    </div>
  );
}

export default App;
