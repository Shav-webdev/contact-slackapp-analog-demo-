import React from "react";

export const Instagram = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    width="24"
    height="24"
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="M-707 -589L253 -589L253 697L-707 697Z" />
      </clipPath>
      <image
        width="14"
        height="14"
        id="img2123456"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPElEQVQ4T33SP0iXURTG8c9vcpPEJZoLxQwJdBBRQRDEBm1ocBFMdBGEphB0Ef9OIugouBhBiIggmks45KZE4OImQoqCg05OcuC+cHsR73bOfb7nPOeeW/H/qUIf2tGIO/zGTxzn0koW9ONrqVAe/sIyLiNZgL2YSqobnGdENV6n+AyDOXiULtbwF+8y8Aon+JFyK9iIjh8wmZKLmd0/eIMlvMc/DCdda4Cz6EqJCcynWcJiwCN4i3BTgJ8D3MLLBK6iB3sYwwNmMF0CFwOMSg0JDFHYjoeKToeoSePkHb8EOITRBMY6Ys57rKMO3Wm+3cxqR4CvsJk9TgtelPa5jzZ0YBsLxR7HMZDEB6U9RpGmbJefcJH/nAV0PvNz4moOO/kHKPSxlo9oLhX4jm+4LvJ5x1xbi3rc4vQpF486IzvFxI7E7AAAAABJRU5ErkJggg=="
      />
    </defs>
    <g id="tesla" clipPath="url(#cp1)">
      <g id="Group 361">
        <use
          id="instagram-sketched"
          href="#img2123456"
          transform="matrix(1,0,0,1,0,0)"
        />
      </g>
    </g>
  </svg>
);

Instagram.defaultProps = {
  fillRule: "evenodd",
  fill: "#eeb60f",
};
