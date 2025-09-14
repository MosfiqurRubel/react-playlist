import UserList from "./immutability/UserList";
import MovieWatch from "./MovieWatch";

function App() {
  return (
    <div className="flex flex-col">
      {/* <UserList /> */}
      <div className="flex justify-center">
        <MovieWatch />
      </div>
    </div>
  );
}

export default App;
