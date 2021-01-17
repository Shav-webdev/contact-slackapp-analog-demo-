import React from "react";

export const Globe = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    width="26"
    height="26"
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="M-654 -550L306 -550L306 736L-654 736Z" />
      </clipPath>
      <image
        width="14"
        height="14"
        id="img1"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPUlEQVQ4T5XSvUsWUBQG8J8hIoSjIELo5JAQqKvgFiJGIBg0vItCkODgIKI46JJIUEK0lJPR3h8gqJA4iJP4gaCjuNiQBkEGcuRcef0Y6sDl3nPuec7nU+OuNKEXrdjJs3vbreaW4SOG8Bk/sIoVfMVi6leQAnyMF/nxBY8wk2cQI5hFT97XwHc4Ri0ucIBOrCNKf4pzbGIDe5Gxgv00vsU4uvAMyzhCP5bwG3OYDOAHjGav7zGW71JqqBHoLCt5Unqcx0Q6X0W7BximbnzPv0pkjMj/K+f/Wmo7HmA799sWwCm8yZRlOKFW9ziMbzjFQEw7gB14jk94hXo04GGS4C9+YSsn/BLThQCv8TMZUjKVuy6z9WEhQLHTasrFSk7wJx0LMOjWjDUEqw6rKVem2pKraUxyBxVDguQ3pn8J2L1Lax2NwREAAAAASUVORK5CYII="
      />
    </defs>
    <g id="tesla" clipPath="url(#cp1)">
      <g id="internet">
        <use id="Group 360" href="#img1" transform="matrix(1,0,0,1,0,0)" />
      </g>
    </g>
  </svg>
);

Globe.defaultProps = {
  fillRule: "evenodd",
  fill: "#eeb60f",
};
