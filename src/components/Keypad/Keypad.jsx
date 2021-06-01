import React from "react";
import Button from "../Button";

const Keypad = ({ clickHandler, onClickEqual, onClear }) => {
  const renderDigitKeys = () => {
    const digitKeys = [
      "7",
      "8",
      "9",
      "4",
      "5",
      "6",
      "1",
      "2",
      "3",
      "00",
      "0",
      ".",
    ];
    return digitKeys.map((key) => (
      <Button key={key} text={key} clickHandler={clickHandler} />
    ));
  };

  return (
    <section className="calculator__keypad">
      <div className="calculator__input-keys">
        <div className="calculator__function-keys">
          <Button text="C" clickHandler={onClear} />
          <Button text="+/-" />
          <Button text="%" />
        </div>
        <div className="calculator__digit-keys">{renderDigitKeys()}</div>
      </div>
      <div className="calculator__operator-keys">
        <Button text="/" clickHandler={clickHandler} />
        <Button text="*" clickHandler={clickHandler} />
        <Button text="-" clickHandler={clickHandler} />
        <Button text="+" clickHandler={clickHandler} />
        <Button text="=" clickHandler={onClickEqual} />
      </div>
    </section>
  );
};

export default Keypad;
