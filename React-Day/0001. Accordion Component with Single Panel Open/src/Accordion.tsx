import React, { useState } from "react";
import { IAccordionData } from "../App";
import "../styles.css";

interface IAccordionProps {
  data: IAccordionData[];
}

export default function Accordion({ data }: IAccordionProps) {
  const [openPanelIndex, setOpenPanelIndex] = useState<number | null>(null);

  function togglePanel(index: number) {
    setOpenPanelIndex(openPanelIndex === index ? null : index);
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div onClick={() => togglePanel(index)}>{item.heading}</div>
          {openPanelIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
