import { useState, useEffect } from "react";
import Keypad from "./components/Keypad";
import Display from "./components/Display";
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
      <Display displayText={stack} />
      <Keypad
        clickHandler={clickHandler}
        onClickEqual={clickHandler}
        onClear={clickHandler}
      />
    </main>
  );
}

export default App;
