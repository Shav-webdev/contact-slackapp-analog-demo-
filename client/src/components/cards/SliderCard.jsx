import React from "react";
import classes from "./Cards.module.scss";

const SliderCard = ({ icon, title }) => {
  return (
    <div className={classes["slider-card-wrapper"]}>
      <div className={classes["slider-card-icon-wrapper"]}>{icon}</div>
      <div className={classes["slider-card-title-wrapper"]}>
        <h3 className={classes["slider-card-title"]}>{title}</h3>
      </div>
    </div>
  );
};

export default React.memo(SliderCard);
