/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { ButtonTag } from ".";

export default {
  title: "UDS/ButtonTag",
  component: ButtonTag,
  parameters: {
    docs: {
      description: {
        component: `The ButtonTag component can be used to generate UDS-compliant \`<button>\`
        and button-styled \`<a>\` links. If you are working with third-party React link components,
        such as react-router's Link, this ButtonTag component will accept those components and style
        them in UDS.

## Usage

By default, the ButtonTag component will output \`<button>\` or \`<a>\` tags, based on whether a URL
string is provided via the \`href\` prop or an event handler function is provided via the \`onClick\`
prop. The \`href\` prop will cause the ButtonTag component to render as a button-styled \`<a>\` link.
Without the \`href\` prop, the ButtonTag will render as a \`<button>\`.

To use the React Router Link in the ButtonTag component, pass an instance of \`<Link>\` to the \`element\`
prop and any additional props required by Link, e.g. \`to\` prop required for the destination URL.
The rendered link will leverage all features of React Router, and be visually styled for UDS.

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
        <ButtonTag {...args}>{label}</ButtonTag>
      </div>
    </div>
  );
};

export const TagButton = Template.bind({});
TagButton.args = {
  label: "Tag Button",
  color: "gray",
  onClick: handleClick,
};

export const TagLink = Template.bind({});
TagLink.args = {
  label: "Tag Link",
  color: "white",
  href: "/#example-link",
};

const ReactRouterTemplate = args => (
  <Router>
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <ButtonTag {...args}>React Router Link</ButtonTag>
      </div>
    </div>
  </Router>
);

export const ReactRouterLinkTag = ReactRouterTemplate.bind({});
ReactRouterLinkTag.args = {
  color: "white",
  element: Link,
  to: "/#example-link",
};
