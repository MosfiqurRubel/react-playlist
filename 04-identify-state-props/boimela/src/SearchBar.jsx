import { PropTypes } from "prop-types";

function SearchBar({ searchTerm, onSearchBook }) {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search books..."
        onChange={(event) => onSearchBook(event.target.value)}
        className="mb-4 border rounded-md p-1 w-full"
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};

export default SearchBar;
