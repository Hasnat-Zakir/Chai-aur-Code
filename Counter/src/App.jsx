import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h3>Current Value is: {counter}</h3>

      <button type="button" className="btn btn-success" onClick={addValue}>
        Add
      </button>
      <br />

      <button type="button" className="btn btn-danger" onClick={decreaseValue}>
        Decrease
      </button>
    </>
  );
}

export default App;
