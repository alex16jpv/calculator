import React from "react";

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

export default Button;
