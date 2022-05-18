/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const ButtonTag = ({
  ariaLabel,
  children,
  color,
  disabled,
  element,
  innerRef,
  href,
  onClick,
  ...props
}) => {
  const btnClasses = classNames(UdsStyles["btn"], UdsStyles[`btn-tag`], {
    [UdsStyles[`btn-tag-alt-white`]]: color === "white",
    [UdsStyles[`btn-tag-alt-gray`]]: color === "gray",
    [UdsStyles[`btn-tag-alt-dark`]]: color === "dark",
    [UdsStyles[`disabled`]]: disabled,
  });

  let Tag = element;
  if (href && element === "button") {
    Tag = "a";
  }

  return (
    <Tag
      type={Tag === "button" && onClick ? "button" : undefined}
      {...props}
      className={btnClasses}
      href={href}
      ref={innerRef}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </Tag>
  );
};

ButtonTag.propTypes = {
  /**
    ARIA label for accessibility
  */
  ariaLabel: PropTypes.string,
  /**
    Content nodes to be wrapped by rendered Button element (usually just the text label)
  */
  children: PropTypes.node.isRequired,
  /**
    Button background color
  */
  color: PropTypes.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: PropTypes.bool,

  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
      ])
    ),
  ]),

  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: PropTypes.string,

  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  /**
    Event handler function for `<button>`
  */
  onClick: PropTypes.func,
};

ButtonTag.defaultProps = {
  ariaLabel: undefined,
  color: "gray",
  disabled: undefined,
  element: "button",
  href: undefined,
  innerRef: undefined,
  onClick: undefined,
};
