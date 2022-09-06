import { useState } from "react";
import "./styles.css";

export default function App() {
  //   // 6 colors in total
  let [boxes, setBoxes] = useState([
    { name: "Box 1", color: "green" },
    { name: "Box 2", color: "yellow" },
    { name: "Box 3", color: "blue" },
    { name: "Box 4", color: "red" },
    { name: "Box 5", color: "white" },
    { name: "Box 6", color: "orange" }
  ]);
  let [boxProperty, setBoxProperty] = useState(0);

   const handleBoxProp = (e) => {
    setBoxProperty(e.target.value);
  };
  
  const handleColorsChange = (e) => {
    let new_box = [...boxes];
    new_box[boxProperty].color = e.target.value;
    setBoxes(new_box);
  };

  const handleNameChange = (name, i) => {
    let new_box = [...boxes];
    new_box[i].name = name;
    setBoxes(new_box);
  };

 

  return (
    <div className="App">
      <div className="selectors">
        Select one box &nbsp;
        <select onChange={handleBoxProp}>
          <option value="0">{boxes[0].name}</option>
          <option value="1">{boxes[1].name}</option>
          <option value="2">{boxes[2].name}</option>
          <option value="3">{boxes[3].name}</option>
          <option value="4">{boxes[4].name}</option>
          <option value="5">{boxes[5].name}</option>
        </select>
        &nbsp; Select one color &nbsp;
        <select onChange={handleColorsChange}>
          <option>green</option>
          <option>yellow</option>
          <option>blue</option>
          <option>red</option>
          <option>white</option>
          <option>orange</option>
        </select>
      </div>

      <br />
      <div className="container_boxes">
        <div
          className="boxes"
          style={{ backgroundColor: `${[boxes[0].color]}` }}
        >
          change name:
          <input
            value={boxes[0].name}
            onChange={(e) => handleNameChange(e.target.value, 0)}
          ></input>
        </div>
        <div
          className="boxes"
          style={{ backgroundColor: `${[boxes[1].color]}` }}
        >
          change name:
          <input
            value={boxes[1].name}
            onChange={(e) => handleNameChange(e.target.value, 1)}
          ></input>
        </div>
        <div
          className="boxes"
          style={{ backgroundColor: `${[boxes[2].color]}` }}
        >
          change name:
          <input
            value={boxes[2].name}
            onChange={(e) => handleNameChange(e.target.value, 2)}
          ></input>
        </div>
        <div
          className="boxes"
          style={{ backgroundColor: `${[boxes[3].color]}` }}
        >
          change name:
          <input
            value={boxes[3].name}
            onChange={(e) => handleNameChange(e.target.value, 3)}
          ></input>
        </div>
        <div
          className="boxes"
          style={{ backgroundColor: `${[boxes[4].color]}` }}
        >
          change name:
          <input
            value={boxes[4].name}
            onChange={(e) => handleNameChange(e.target.value, 4)}
          ></input>
        </div>
        <div
          className="boxes"
          style={{ backgroundColor: `${[boxes[5].color]}` }}
        >
          change name:
          <input
            value={boxes[5].name}
            onChange={(e) => handleNameChange(e.target.value, 5)}
          ></input>
        </div>
      </div>
    </div>
  );
}
