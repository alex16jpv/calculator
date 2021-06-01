import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, clickHandler }) => {
  return (
    <button
      className="calculator-key"
      onClick={() => {
        clickHandler(text);
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: "...",
  clickHandler: () => {
    console.log("Default click handler");
  },
};

export default Button;
