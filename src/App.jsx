import { useState, useEffect } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [stack, setStack] = useState("0");

  const clickHandler = (text) => {
    setStack(text);
  };

  useEffect(() => {
    console.log(`Stack: ${stack}`);
  }, [stack]);

  return (
    <main className="calculator">
      <section className="calculator__display">{stack}</section>
      <section className="calculator__keypad">
        <div className="calculator__input-keys">
          <div className="calculator__function-keys">
            <Button text="C" clickHandler={clickHandler} />
            <Button text="+/-" clickHandler={clickHandler} />
            <Button text="%" clickHandler={clickHandler} />
          </div>
          <div className="calculator__digit-keys">
            <Button text="7" clickHandler={clickHandler} />
            <Button text="8" clickHandler={clickHandler} />
            <Button text="9" clickHandler={clickHandler} />
            <Button text="4" clickHandler={clickHandler} />
            <Button text="5" clickHandler={clickHandler} />
            <Button text="6" clickHandler={clickHandler} />
            <Button text="1" clickHandler={clickHandler} />
            <Button text="2" clickHandler={clickHandler} />
            <Button text="3" clickHandler={clickHandler} />
            <Button text="00" clickHandler={clickHandler} />
            <Button text="0" clickHandler={clickHandler} />
            <Button text="." clickHandler={clickHandler} />
          </div>
        </div>
        <div className="calculator__operator-keys">
          <Button text="/" clickHandler={clickHandler} />
          <Button text="*" clickHandler={clickHandler} />
          <Button text="-" clickHandler={clickHandler} />
          <Button text="+" clickHandler={clickHandler} />
          <Button text="=" clickHandler={clickHandler} />
        </div>
      </section>
    </main>
  );
}

export default App;
