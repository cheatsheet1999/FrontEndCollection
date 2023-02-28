import React, { useState } from "react";
import "./styles.css";

function Accordion(props) {
  const [panelOpenState, setPanelState] = useState([]);

  const togglePanel = (index) => {
    setPanelState({
      ...panelOpenState,
      [index]: !panelOpenState[index]
    });
  };

  return (
    <React.Fragment>
      {props.data.map((collapsible, index) => {
        return (
          <div className="panel" key={index}>
            <div className="header" onClick={() => togglePanel(index)}>
              {collapsible.heading}
            </div>
            {panelOpenState[index] === true && (
              <div className="content">{collapsible.content}</div>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Accordion;
