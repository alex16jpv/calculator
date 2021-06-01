import React from "react";
import PropTypes from "prop-types";

const Display = ({ displayText }) => (
  <section className="calculator__display">{displayText || "0"}</section>
);

Display.propTypes = {
  displayText: PropTypes.string.isRequired,
};

Display.defaultProps = {
  displayText: "0",
};

export default Display;
