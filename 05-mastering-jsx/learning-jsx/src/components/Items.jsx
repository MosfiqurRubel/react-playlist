import PropTypes from "prop-types";

function Items({ items, className = "", itemClass = "" }) {
  return (
    <ul className={`list-disc list-inside space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item.id} className={`text-gray-800 ${itemClass}`}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  itemClass: PropTypes.string,
};

export default Items;
