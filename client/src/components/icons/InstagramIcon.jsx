import React from "react";

export const InstagramIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30" height="30">
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="M-154 -635L806 -635L806 422L-154 422Z" />
      </clipPath>
      <linearGradient id="grd1" gradientUnits="userSpaceOnUse" x1="-1.722" y1="23.738" x2="-1.233" y2="24.227">
        <stop offset="0" stopColor="#ffc107" />
        <stop offset="0.507" stopColor="#f44336" />
        <stop offset="0.99" stopColor="#9c27b0" />
      </linearGradient>
      <linearGradient id="grd2" gradientUnits="userSpaceOnUse" x1="-1.584" y1="23.877" x2="-1.372" y2="24.088">
        <stop offset="0" stopColor="#ffc107" />
        <stop offset="0.507" stopColor="#f44336" />
        <stop offset="0.99" stopColor="#9c27b0" />
      </linearGradient>
      <linearGradient id="grd3" gradientUnits="userSpaceOnUse" x1="-1.332" y1="24.134" x2="-1.304" y2="24.163">
        <stop offset="0" stopColor="#ffc107" />
        <stop offset="0.507" stopColor="#f44336" />
        <stop offset="0.99" stopColor="#9c27b0" />
      </linearGradient>
    </defs>

    <g id="help_info_3" clipPath="url(#cp1)">
      <g id="instagram">
        <path id="Path 1474" fillRule={props.fillRule} fill={props.fill1}
              d="M19.17 5.99L19.17 13.18C19.17 16.48 16.48 19.17 13.18 19.17L5.99 19.17C2.68 19.17 0 16.48 0 13.18L0 5.99C0 2.68 2.68 0 5.99 0L13.18 0C16.48 0 19.17 2.68 19.17 5.99ZM17.37 5.99C17.37 3.68 15.49 1.8 13.18 1.8L5.99 1.8C3.68 1.8 1.8 3.68 1.8 5.99L1.8 13.18C1.8 15.49 3.68 17.37 5.99 17.37L13.18 17.37C15.49 17.37 17.37 15.49 17.37 13.18L17.37 5.99Z" />
        <path id="Path 1475" fillRule={props.fillRule} fill={props.fill2}
              d="M14.37 9.58C14.37 12.23 12.23 14.37 9.58 14.37C6.94 14.37 4.79 12.23 4.79 9.58C4.79 6.94 6.94 4.79 9.58 4.79C12.23 4.79 14.37 6.94 14.37 9.58ZM12.58 9.58C12.58 7.93 11.23 6.59 9.58 6.59C7.93 6.59 6.59 7.93 6.59 9.58C6.59 11.23 7.93 12.58 9.58 12.58C11.23 12.58 12.58 11.23 12.58 9.58Z" />
        <path id="Ellipse 1" fill={props.fill3}
              d="M14.73 5.07C14.38 5.07 14.1 4.79 14.1 4.43C14.1 4.08 14.38 3.79 14.73 3.79C15.09 3.79 15.37 4.08 15.37 4.43C15.37 4.79 15.09 5.07 14.73 5.07Z" />
      </g>
    </g>
  </svg>
);

InstagramIcon.defaultProps = {
  fillRule: "evenodd",
  fill: "#eeb60f",
  fill1: `url(#grd1)`,
  fill2: `url(#grd2)`,
  fill3: `url(#grd3)`,
};
//{opacity: 0.255;fill: #848484}
