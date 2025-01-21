import React from "react";

export const CloseIcon = ({
  width = 13.3125,
  height = 13.3125,
  className = "",
  fill = "rgb(25, 50, 56)",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox="0 0 13.3125 13.3125"
    className={`${className} cursor-pointer`}
    {...props}
  >
    <path
      transform="matrix(1 0 0 1 0 0)"
      d="M1.05469 13.3125L0 12.2578L5.60156 6.65625L0 1.05469L1.05469 0L6.65625 5.60156L12.2578 0L13.3125 1.05469L7.71094 6.65625L13.3125 12.2578L12.2578 13.3125L6.65625 7.71094L1.05469 13.3125Z"
      fillRule="nonzero"
      fill={fill}
    />
  </svg>
);
