import React from "react";

export const FacebookIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 20"
    width="30"
    height="30"
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="M-121 -636L839 -636L839 421L-121 421Z" />
      </clipPath>
    </defs>
    <g id="help_info" clipPath="url(#cp1)">
      <g id="facebook (4)">
        <path
          id="Path 1476"
          fill={props.fill}
          d="M18 0L3 0C1.62 0 0.5 1.12 0.5 2.5L0.5 17.5C0.5 18.88 1.62 20 3 20L18 20C19.38 20 20.5 18.88 20.5 17.5L20.5 2.5C20.5 1.12 19.38 0 18 0Z"
        />
        <path
          id="Path 1477"
          fill={props.whiteColor}
          d="M17.37 10L14.25 10L14.25 7.5C14.25 6.81 14.81 6.87 15.5 6.87L16.75 6.87L16.75 3.75L14.25 3.75L14.25 3.75C12.18 3.75 10.5 5.43 10.5 7.5L10.5 10L8 10L8 13.12L10.5 13.12L10.5 20L14.25 20L14.25 13.12L16.12 13.12L17.37 10Z"
        />
      </g>
    </g>
  </svg>
);

FacebookIcon.defaultProps = {
  fillRule: "evenodd",
  fill: "#eeb60f",
};
//{opacity: 0.255;fill: #848484}
