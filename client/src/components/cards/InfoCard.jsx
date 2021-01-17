import React from "react";
import classes from "./Cards.module.scss";

const InfoCard = ({ info }) => {
  const { title, count, icon } = info;
  return (
    <div className={classes["info-card"]}>
      <div className={classes["info-icon-wrapper"]}>{icon}</div>
      <div className={classes["info-meta-section"]}>
        <p className={classes["info-count"]}>{count}</p>
        <h3 className={classes["info-title"]}>{title}</h3>
      </div>
    </div>
  );
};

export default React.memo(InfoCard);
