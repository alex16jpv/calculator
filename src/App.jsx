import "./App.css";

function App() {
  return (
    <main className="calculator">
      <section className="calculator__display">0</section>
      <section className="calculator__keypad">
        <div className="calculator__input-keys">
          <div className="calculator__function-keys">
            <button className="calculator-key">C</button>
            <button className="calculator-key">+/-</button>
            <button className="calculator-key">%</button>
          </div>
          <div className="calculator__digit-keys">
            <button className="calculator-key">7</button>
            <button className="calculator-key">8</button>
            <button className="calculator-key">9</button>
            <button className="calculator-key">4</button>
            <button className="calculator-key">5</button>
            <button className="calculator-key">6</button>
            <button className="calculator-key">1</button>
            <button className="calculator-key">2</button>
            <button className="calculator-key">3</button>
            <button className="calculator-key">00</button>
            <button className="calculator-key">0</button>
            <button className="calculator-key">.</button>
          </div>
        </div>
        <div className="calculator__operator-keys">
          <button className="calculator-key">/</button>
          <button className="calculator-key">*</button>
          <button className="calculator-key">-</button>
          <button className="calculator-key">+</button>
          <button className="calculator-key">=</button>
        </div>
      </section>
    </main>
  );
}

export default App;
