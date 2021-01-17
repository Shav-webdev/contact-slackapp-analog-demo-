import React from "react";

export const Hexagon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 239 210"
    width="239"
    height="210"
  >
    <path
      id="Path 36"
      fillRule={props.fillRule}
      fill={props.fill}
      d="M179.26 0.68L238.85 104.98L179.26 209.25L60.08 209.25L0.48 104.98L60.08 0.68L179.26 0.68ZM174.91 8.14L64.43 8.14L8.97 104.98L64.43 201.81L174.93 201.81L230.39 104.98L174.91 8.14Z"
    />
  </svg>
);

Hexagon.defaultProps = {
  fillRule: "evenodd",
  fill: "#000",
};
