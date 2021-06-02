/* eslint no-eval: 0 */
import { useState, useEffect } from "react";
import Keypad from "./components/Keypad";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [stack, setStack] = useState("");

  const clickHandler = (text) => {
    if (text) {
      setStack(`${stack}${text}`);
    }
  };

  const onClear = () => {
    setStack("");
  };

  const onClickEqual = () => {
    setStack(eval(stack).toString());
  };

  useEffect(() => {
    console.log(`Stack: ${stack}`);
  }, [stack]);

  return (
    <main className="calculator">
      <Display displayText={stack} />
      <Keypad
        clickHandler={clickHandler}
        onClickEqual={onClickEqual}
        onClear={onClear}
      />
    </main>
  );
}

export default App;
