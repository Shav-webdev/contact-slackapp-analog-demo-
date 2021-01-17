import React from "react";
import classes from "./Cards.module.scss";

const PromotionCard = ({ title, description, imageUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={classes["promotion-card"]}
    >
      <div className={classes["promotion-card-highlight"]}>
        <div className={classes["promotion-meta"]}>
          <div className={classes["promotion-meta-section"]}>
            <h2 className={classes["promotion-title"]}>{title.toUpperCase()}</h2>
            <p className={classes["promotion-description"]}>{description}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default React.memo(PromotionCard);
