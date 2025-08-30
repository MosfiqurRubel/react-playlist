import Header from "./Header";
import SearchBar from "./SearchBar";
import Checkbox from "./Checkbox";
import CarList from "./CarList";

function Cars() {
  return (
    <div className="mx-auto p-4 space-y-4">
      <Header />
      <div className="flex gap-6 items-center">
        <SearchBar />
        <Checkbox />
      </div>
      <CarList />
    </div>
  );
}

export default Cars;
