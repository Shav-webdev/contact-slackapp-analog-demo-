import React from "react";

export const ArrowRight = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 31"
    width="45"
    height="31"
    style={props.style}
  >
    <path
      id="Path 1354"
      fill={props.fill}
      d="M43.89 13.85L30.65 0.61C29.84 -0.2 28.53 -0.2 27.73 0.61C26.92 1.41 26.92 2.72 27.73 3.53L37.44 13.24L2.07 13.24C0.93 13.24 0 14.17 0 15.31C0 16.45 0.93 17.38 2.07 17.38L37.44 17.38L27.73 27.09C26.92 27.9 26.92 29.21 27.73 30.02C28.13 30.42 28.66 30.62 29.19 30.62C29.72 30.62 30.25 30.42 30.65 30.02L43.89 16.77C44.7 15.97 44.7 14.66 43.89 13.85Z"
    />
  </svg>
);

ArrowRight.defaultProps = {
  fillRule: "evenodd",
  fill: "#eeb60f",
};
