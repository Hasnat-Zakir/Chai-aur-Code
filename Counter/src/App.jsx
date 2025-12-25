import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter++);
  };

  const removeValue = () => {
    setCounter(counter--);
  };

  return (
    <>
      <h1>Counter</h1>
      <h3>Current Value is:{counter}</h3>
      <button type="button" className="btn btn-success" onClick={addValue}>
        Add
      </button>
      <br />
      <button type="button" className="btn btn-danger" onClick={removeValue}>
        Decrease
      </button>
    </>
  );
}

export default App;
