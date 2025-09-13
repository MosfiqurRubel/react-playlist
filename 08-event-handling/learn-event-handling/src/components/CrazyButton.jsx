import PropTypes from "prop-types";
import Button from "./Button";

function CrazyButton() {
  return (
    <div className="flex gap-1.5">
      <Button message="Dancing!">Dance</Button>
      <Button message="Jumping!">Jump</Button>
    </div>
  );
}

Button.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CrazyButton;
