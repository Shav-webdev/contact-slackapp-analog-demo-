import React from "react";

export const ArrowLeft = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 31"
    width="45"
    height="31"
  >
    <path
      id="Path 1354"
      fill={props.fill}
      d="M0.61 16.77L13.85 30.02C14.66 30.82 15.97 30.82 16.77 30.02C17.58 29.21 17.58 27.9 16.77 27.09L7.06 17.38L42.43 17.38C43.57 17.38 44.5 16.45 44.5 15.31C44.5 14.17 43.57 13.24 42.43 13.24L7.06 13.24L16.77 3.53C17.58 2.72 17.58 1.41 16.77 0.61C16.37 0.2 15.84 0 15.31 0C14.78 0 14.25 0.2 13.85 0.61L0.61 13.85C-0.2 14.66 -0.2 15.97 0.61 16.77Z"
    />
  </svg>
);

ArrowLeft.defaultProps = {
  fillRule: "evenodd",
  fill: "#eeb60f",
};
//{opacity: 0.255;fill: #848484}
