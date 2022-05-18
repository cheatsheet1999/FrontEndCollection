/* eslint react/jsx-props-no-spreading: "off", no-alert: "off" */
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Button } from ".";

export default {
  title: "UDS/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `The Button component can be used to generate UDS-compliant \`<button>\` DOM elements and Button-styled \`<a>\` links. If you are working with third-party React link components, such as react-router's Link, this Button component will accept those components and and style them in UDS.

## Usage

By default, the Button component will output \`<button>\` or \`<a>\` tags, based on whether a URL string is provided via the \`href\` prop or an event handler function is provided via the \`onClick\` prop. The \`href\` prop will cause the Button component to render as a button-styled \`<a>\` link. Without the \`href\` prop, the Button will render as a \`<button>\`.

To use the React Router Link in the Button component, pass an instance of \`<Link>\` to the \`element\` prop and any additional props required by Link, e.g. \`to\` prop required for the destination URL. The rendered link will leverage all features of React Router, and be visually styled for UDS.

View component examples and source code below.
        `,
      },
    },
  },
};

const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

const Template = args => {
  const { label } = args;

  return (
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args}>{label}</Button>
      </div>
    </div>
  );
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: "Default Button",
  onClick: handleClick,
};
DefaultButton.parameters = {
  docs: {
    source: {
      code: `const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  onClick: handleClick,
/>Default Button</Button>`,
    },
  },
};

export const SmallGoldButton = Template.bind({});
SmallGoldButton.args = {
  color: "gold",
  label: "Small Gold Button",
  onClick: handleClick,
  size: "small",
};
SmallGoldButton.parameters = {
  docs: {
    description: {
      story: `When the Button component is provided with an onClick handler function, the Button is rendered as a \`<button type="button">\`.

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color="gold"
      onClick: handleClick,
      size: "small",
    />Small Gold Button</Button>`,
    },
    source: {
      code: `const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color="gold"
  onClick: handleClick,
  size: "small",
/>Small Gold Button</Button>`,
    },
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  color: "gold",
  icon: faRocket,
  label: "Icon Button",
  onClick: handleClick,
};
IconButton.parameters = {
  docs: {
    description: {
      story: `To include a Font Awesome icon in the button label, import the desired React icon and pass it to the Button component via the \`icon\` prop.:

    import { faRocket } from "@fortawesome/free-solid-svg-icons";

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color="gold"
      icon: faRocket,
      onClick: handleClick,
    >Icon Button</Button>`,
    },
    source: {
      code: `import { faRocket } from "@fortawesome/free-solid-svg-icons";

const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color="gold"
  icon: faRocket,
  onClick: handleClick,
>Icon Button</Button>`,
    },
  },
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  color: "maroon",
  href: "/#example-link",
  label: "Link Button",
};
LinkButton.parameters = {
  docs: {
    description: {
      story: `To render a button-style link, \`<a>\`-tag, use the \`href\` prop to set the destination url for this link. When a button is primarily intended for page navigation, this is the recommended solution for accessibility.

    <Button
      color="maroon"
      href="/#example-link"
    />Link Button</Button>`,
    },
    source: {
      code: `<Button
  color="maroon"
  href="/#example-link"
/>Link Button</Button>`,
    },
  },
};

const ReactRouterTemplate = args => (
  <Router>
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args}>React Router Link</Button>
      </div>
    </div>
  </Router>
);

export const ReactRouterLinkButton = ReactRouterTemplate.bind({});
ReactRouterLinkButton.args = {
  color: "gold",
  element: Link,
  to: "/#example-link",
};
ReactRouterLinkButton.parameters = {
  docs: {
    description: {
      story: `To use the React Router Link in the Button component, pass an instance of \`<Link>\` to the \`element\` prop and any additional props required by Link, e.g. the \`to\` prop required for the destination URL. The rendered link will leverage all features of React Router, and be visually styled for UDS.

    import { BrowserRouter as Router, Link } from "react-router-dom";

    <Router>
      <...>
        <Button
          color="gold"
          element={Link}
          to="/#example-link"
        >React Router Link</Button>
      </...>
    </Router>`,
    },
    source: {
      code: `import { BrowserRouter as Router, Link } from "react-router-dom";

<Router>
  <...>
    <Button
      color="gold"
      element={Link}
      to="/#example-link"
    >React Router Link</Button>
  </...>
</Router>`,
    },
  },
};
