import React from "react";
import PropTypes from "prop-types";

const Display = ({ displayText }) => {
  return <section className="calculator__display">{displayText}</section>;
};

Display.propTypes = {
  displayText: PropTypes.string.isRequired,
};

Display.defaultProps = {
  displayText: "0",
};

export default Display;
