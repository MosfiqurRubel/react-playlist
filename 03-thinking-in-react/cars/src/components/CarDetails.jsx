import PropTypes from "prop-types";

function CarDetails({ car }) {
  return (
    <>
      <h2 className="text-lg font-bold text-black mb-2">{car.title}</h2>
      <ul className="space-y-1">
        <li className="text-sm space-x-1">
          <label className="font-semibold text-black">Brand:</label>
          <span className="font-normal text-gray-800">{car.brand}</span>
        </li>
        <li className="text-sm space-x-1">
          <label className="font-semibold text-black">Year:</label>
          <span className="font-normal text-gray-800">{car.year}</span>
        </li>
        <li className="text-sm space-x-1">
          <label className="font-semibold text-black">Price:</label>
          <span className="font-normal text-gray-800">${car.price}</span>
        </li>
        <li className="text-sm space-x-1">
          <label className="font-semibold text-black">Premium:</label>
          <span className="font-normal text-gray-800">
            {car.isPremium ? "Yes" : "No"}
          </span>
        </li>
      </ul>
    </>
  );
}

CarDetails.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarDetails;
