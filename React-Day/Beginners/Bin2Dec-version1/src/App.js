import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [binaryNum, setBinaryNum] = useState("");
  const [decimalNum, setDecimalNum] = useState("");

  const handleBinaryOnChange = (e) => {
    setBinaryNum(e.target.value);
    setDecimalNum(parseInt(e.target.value, 2));
  };

  const handleDecimalOnChange = (e) => {
    setBinaryNum(Number(e.target.value).toString(2));
    setDecimalNum(e.target.value);
  };

  useEffect(() => {
    if (binaryNum.match(/^[0-1]+$/g) === null) {
      if (binaryNum !== "") {
        alert("Error"); 
      }
    } else {
      setDecimalNum(parseInt(binaryNum, 2));
    }
  }, [binaryNum]);

  return (
    <div className="App">
      Binary:{" "}
      <input
        placeholder="Enter 0 or 1"
        value={binaryNum}
        onChange={handleBinaryOnChange}
        maxLength="8"
      ></input>
      <p />
      Decimal:{" "}
      <input
        placeholder="Decimal"
        value={decimalNum}
        onChange={handleDecimalOnChange}
      ></input>
    </div>
  );
}
