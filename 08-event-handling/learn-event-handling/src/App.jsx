import Button from "./components/Button";
import CrazyButton from "./components/CrazyButton";
import Register from "./components/Register";
import TextBox from "./components/TextBox";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div className="p-4 space-y-4">
      <Button />
      <div className="block">
        <TextBox />
      </div>
      <CrazyButton />
      <ToolBar />
      <Register />
    </div>
  );
}

export default App;
