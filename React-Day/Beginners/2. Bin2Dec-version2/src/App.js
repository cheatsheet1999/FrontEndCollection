import { useState } from "react";
import "./styles.css";

export default function App() {
  const [binaryNum, setBinaryNum] = useState("");
  const [decimalNum, setDecimalNum] = useState("");

  const handleBinaryOnChange = (e) => {
    setBinaryNum(e.target.value);
    console.log(binaryNum);
  };

  const handleDecimalNum = (e) => {
    e.preventDefault();
    if (binaryNum.match(/^[0-1]+$/g) === null) {
      alert("Error");
    } else {
      setDecimalNum(parseInt(binaryNum, 2));
    }
  };

  const handleDecimalOnChange = (e) => {
    setDecimalNum(e.target.value);
  };

  const handleDecimalToBinary = (e) => {
    e.preventDefault();
    setBinaryNum(Number(decimalNum).toString(2));
  };

  return (
    <div className="App">
      Binary:{" "}
      <input
        placeholder="Enter 0 or 1"
        onChange={handleBinaryOnChange}
        value={binaryNum}
        maxLength="8"
      ></input>
      <p />
      <form onSubmit={handleDecimalNum}>
        Decimal:{" "}
        <input
          placeholder="Decimal"
          value={decimalNum}
          onChange={handleDecimalOnChange}
        ></input>
        <p />
        <button type="submit">Binary to Decimal</button>
      </form>
      <button onClick={handleDecimalToBinary}>Decimal to Binary</button>
    </div>
  );
}
