import PropTypes from "prop-types";
import { useState } from "react";

function Register() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-sm"
        placeholder="Enter something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

Register.propTypes = {
  //
};

export default Register;
