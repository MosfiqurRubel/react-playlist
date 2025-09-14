import PropTypes from "prop-types";

const Filter = ({ setFilter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-3 mb-4">
      <button
        onClick={() => setFilter("all")}
        className="px-2 py-1 text-sm bg-gray-600 hover:bg-gray-700 text-white cursor-pointer rounded"
      >
        All
      </button>
      <button
        onClick={() => setFilter("watched")}
        className="px-2 py-1 text-sm bg-green-600 hover:bg-green-700 text-white cursor-pointer rounded"
      >
        Watched
      </button>
      <button
        onClick={() => setFilter("unwatched")}
        className="px-2 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded"
      >
        Unwatched
      </button>
    </div>
  );
};

export default Filter;
