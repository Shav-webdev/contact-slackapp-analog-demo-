import React from "react";
import classes from "../Footer.module.scss";

export default React.memo(() => {
  return (
    <div className={classes["copyright-section"]}>
      <span className={classes["copyright-section-txt"]}>
        © {new Date().getFullYear()} Copyright Slackapp. All Rights Reserved.
      </span>
    </div>
  );
});
