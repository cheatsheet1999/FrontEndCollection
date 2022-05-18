/* eslint react/jsx-props-no-spreading: "off" */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const Button = ({
  ariaLabel,
  block,
  children,
  color,
  disabled,
  element,
  href,
  icon,
  innerRef,
  onClick,
  size,
  ...props
}) => {
  const btnClasses = classNames(UdsStyles["btn"], {
    [UdsStyles[`btn-${color}`]]: true,
    [UdsStyles[`btn-md`]]: size === "small",
    [UdsStyles[`btn-sm`]]: size === "xsmall",
    [UdsStyles[`btn-block`]]: block,
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
      {icon && <FontAwesomeIcon icon={icon} />}
      {icon && `  `}
      {children}
    </Tag>
  );
};

Button.propTypes = {
  /**
    ARIA label for accessibility
  */
  ariaLabel: PropTypes.string,
  /**
    Render button as a block-button?
  */
  block: PropTypes.bool,
  /**
    Content nodes to be wrapped by rendered Button element (usually just the text label)
  */
  children: PropTypes.node.isRequired,
  /**
    Button background color
  */
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
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
    React Font Awesome icon to be rendered in button label.
  */
  icon: PropTypes.elementType,

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
  /**
    Button size
  */
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
};

Button.defaultProps = {
  ariaLabel: undefined,
  block: undefined,
  color: "gray",
  disabled: undefined,
  element: "button",
  href: undefined,
  icon: undefined,
  innerRef: undefined,
  onClick: undefined,
  size: "default",
};
