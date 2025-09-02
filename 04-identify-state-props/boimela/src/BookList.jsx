import BookRow from "./BookRow";
import { PropTypes } from "prop-types";

function BookList({ searchTerm, books, onFeatureBook }) {
  const rows = [];

  books.forEach((book) => {
    // Early return
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }

    rows.push(
      <BookRow key={book.id} book={book} onFeatureBook={onFeatureBook} />
    );
  });

  return (
    // <ul className="space-y-4">
    //   {books.map((book) => (
    //     <li
    //       key={book.id}
    //       className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
    //     >
    //       <BookRow book={book} />
    //     </li>
    //   ))}
    // </ul>
    <div className="space-y-4">{rows}</div>
  );
}

BookList.propTypes = {
  searchTerm: PropTypes.string.irRequired,
  books: PropTypes.array.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};

export default BookList;
