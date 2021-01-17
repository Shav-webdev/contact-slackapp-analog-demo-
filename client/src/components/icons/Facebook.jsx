import React from "react";

export const Facebook = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    width="24"
    height="24"
    style={props.style}
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="M-680 -589L280 -589L280 697L-680 697Z" />
      </clipPath>
    </defs>

    <g id="tesla" clipPath="url(#cp1)">
      <g id="Group 361">
        <path
          id="facebook"
          fill={props.fill}
          d="M13.33 6.67C13.33 2.98 10.35 0 6.67 0C2.98 0 0 2.98 0 6.67C0 10.35 2.98 13.33 6.67 13.33C6.71 13.33 6.74 13.33 6.78 13.33L6.78 8.14L5.35 8.14L5.35 6.47L6.78 6.47L6.78 5.24C6.78 3.82 7.65 3.04 8.92 3.04C9.53 3.04 10.06 3.09 10.21 3.11L10.21 4.6L9.33 4.6C8.64 4.6 8.51 4.93 8.51 5.41L8.51 6.47L10.16 6.47L9.95 8.14L8.51 8.14L8.51 13.08C11.29 12.28 13.33 9.71 13.33 6.67Z"
        />
      </g>
    </g>
  </svg>
);

Facebook.defaultProps = {
  fillRule: "evenodd",
  fill: "#eeb60f",
};
