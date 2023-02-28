import React, { useState } from "react";
import "./styles.css";

function Accordion(props) {
  const [openPanelIndex, setOpenPanelIndex] = useState(null);

  const togglePanel = (index) => {
    setOpenPanelIndex(openPanelIndex === index ? null : index);
  };

  return (
    <React.Fragment>
      {props.data.map((collapsible, index) => {
        return (
          <div className="panel" key={index}>
            <div className="header" onClick={() => togglePanel(index)}>
              {collapsible.heading}
            </div>
            {openPanelIndex === index && (
              <div className="content">{collapsible.content}</div>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Accordion;
