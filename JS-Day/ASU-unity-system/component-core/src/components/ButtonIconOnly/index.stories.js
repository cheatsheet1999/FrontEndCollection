/* eslint react/jsx-props-no-spreading: "off" */
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { ButtonIconOnly } from ".";

export default {
  title: "UDS/ButtonIconOnly",
  component: ButtonIconOnly,
  parameters: {
    docs: {
      description: {
        component: `The ButtonIconOnly component can be used to generate UDS-compliant \`<button>\` DOM
        elements.

## Usage

The ButtonIconOnly component will output \`<button>\` tags. you must provide an event handler function
for the \`onClick\` prop.

View component examples and source code below.
        `,
      },
    },
  },
};

const handleClick = e => {
  e.preventDefault();
  alert("Close button was clicked.");
};

const Template = args => (
  <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  color: "white",
  icon: faTimes,
  onClick: handleClick,
};

export const CloseButton = Template.bind({});
CloseButton.args = {
  color: "white",
  icon: faTimes,
  onClick: handleClick,
};
CloseButton.parameters = {
  docs: {
    description: {
      story: `
    import { faTimes } from "@fortawesome/free-solid-svg-icons";

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: {faTimes}
      onClick: {handleClick}
    />Default Button</Button>`,
    },
    source: {
      code: `import { faTimes } from "@fortawesome/free-solid-svg-icons";

      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: {faTimes}
  onClick: {handleClick}
/>Default Button</Button>`,
    },
  },
};

export const NextButton = Template.bind({});
NextButton.args = {
  color: "white",
  icon: faChevronRight,
  onClick: handleClick,
  size: "large",
};
NextButton.parameters = {
  docs: {
    description: {
      story: `
    import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: {faChevronRight}
      onClick: {handleClick}
      size: "large"
    />Next Button</Button>`,
    },
    source: {
      code: `import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: {faChevronRight}
  onClick: {handleClick}
  size: "large"
/>Next Button</Button>`,
    },
  },
};

export const PrevButton = Template.bind({});
PrevButton.args = {
  color: "white",
  icon: faChevronLeft,
  onClick: handleClick,
  size: "large",
};
PrevButton.parameters = {
  docs: {
    description: {
      story: `
    import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: {faChevronLeft}
      onClick: {handleClick}
      size: "large"
    />Prev Button</Button>`,
    },
    source: {
      code: `import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: {faChevronLeft}
  onClick: {handleClick}
  size: "large"
/>Prev Button</Button>`,
    },
  },
};
