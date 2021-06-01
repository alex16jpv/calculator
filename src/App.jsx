import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <main className="calculator">
      <section className="calculator__display">0</section>
      <section className="calculator__keypad">
        <div className="calculator__input-keys">
          <div className="calculator__function-keys">
            <Button text="C" />
            <Button text="+/-" />
            <Button text="%" />
          </div>
          <div className="calculator__digit-keys">
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="00" />
            <Button text="0" />
            <Button text="." />
          </div>
        </div>
        <div className="calculator__operator-keys">
          <Button text="/" />
          <Button text="*" />
          <Button text="-" />
          <Button text="+" />
          <Button text="=" />
        </div>
      </section>
    </main>
  );
}

export default App;
