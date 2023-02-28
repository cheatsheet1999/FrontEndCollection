import React from "react";
import Accordion from "./Accordion";

const data = [
  { heading: "Heading 1", content: "Content of first Panel" },
  { heading: "Heading 2", content: "Content of first Pane2" },
  { heading: "Heading 3", content: "Content of first Pane3" },
  { heading: "Heading 4", content: "Content of first Pane4" },
  { heading: "Heading 5", content: "Content of first Pane5" }
];

export default function App() {
  return (
    <div className="App">
      <Accordion data={data} />
    </div>
  );
}
