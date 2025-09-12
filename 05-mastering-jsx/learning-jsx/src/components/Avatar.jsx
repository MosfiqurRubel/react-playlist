import logo from "../assets/logo.png";
import PropTypes from "prop-types";

function Avatar({
  photo = logo,
  description = "Mosfiqur Rahman Rubel",
  size = "w-40 h-40",
  className = "",
}) {
  // const photoURL = "src/assets/logo.png";
  // const description = "Mosfiqur Rahman Rubel";

  const today = new Date();
  function getDay(date) {
    return Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  return (
    <div
      className={`max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 text-center ${className}`}
    >
      <img
        src={photo}
        alt={description}
        className={`${size} object-contain mx-auto rounded-full border-4 border-amber-50 shadow-md`}
      />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{description}</h2>
      <p className="text-sky-600 font-semibold mt-2">
        Today is {getDay(today)}
      </p>
    </div>
  );
}

Avatar.propTypes = {
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
