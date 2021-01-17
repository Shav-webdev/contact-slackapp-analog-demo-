import React from "react";
import classes from "./Footer.module.scss";
import CopyRight from "./components/CopyRight";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <CopyRight />
    </footer>
  );
};

export default React.memo(Footer);
