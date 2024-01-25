import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none" };
const variants = {
  fill: { deep_orange_200: "bg-deep_orange-200 shadow-bs text-black-900" },
};
const sizes = { xs: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "xs",
  variant = "fill",
  color = "deep_orange_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_orange_200"]),
};

export { Button };
