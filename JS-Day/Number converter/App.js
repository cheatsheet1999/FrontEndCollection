import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [squareNumber, setSquareNumber] = useState(0);
  const [squareRootNumber, setSquareRootNumber] = useState(0);

  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      alert("Not a number");
      setNumber(0);
      setSquareNumber(0);
      setSquareRootNumber(0);
    } else {
      setNumber(e.target.value);
      setSquareNumber(e.target.value ** 2);
      setSquareRootNumber(Math.sqrt(e.target.value));
    }
  };
  const convertSquare = (e) => {
    if (isNaN(e.target.value)) {
      alert("Not a number");
      setNumber(0);
      setSquareNumber(0);
      setSquareRootNumber(0);
    } else {
      setNumber(Math.sqrt(e.target.value));
      setSquareNumber(e.target.value);
      setSquareRootNumber(e.target.value ** 2);
    }
  };

  const convertSquareRootNumber = (e) => {
    if (isNaN(e.target.value)) {
      alert("Not a number");
      setNumber(0);
      setSquareNumber(0);
      setSquareRootNumber(0);
    } else {
      setSquareRootNumber(e.target.value);
      setSquareNumber(e.target.value ** 4);
      setNumber(e.target.value ** 2);
    }
  };

  return (
    <div className="App">
      <form>
        <h1>Convert Numbers</h1>
        X: <input value={number} onChange={handleChange}></input>
        <p />
        Square of X:
        <input value={squareNumber} onChange={convertSquare} />
        <p />
        Square root of X:
        <input value={squareRootNumber} onChange={convertSquareRootNumber} />
        <p />
      </form>
    </div>
  );
}
