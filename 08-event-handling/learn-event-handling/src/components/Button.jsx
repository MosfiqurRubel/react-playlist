import PropTypes from "prop-types";

function Button({ message, children = "Click Me" }) {
  function handleClick(event, message) {
    console.log(event.target);
    console.log(message);
  }

  return (
    <button
      className="bg-purple-600 text-white p-1 rounded-sm cursor-pointer"
      onClick={(event) => handleClick(event, message)}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
