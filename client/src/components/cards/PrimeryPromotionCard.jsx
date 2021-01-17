import React from "react";
import classes from "./Cards.module.scss";

const PrimaryPromotionCard = ({ title, description, imageUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={classes["primary-promotion-card"]}
    >
      <h2 className={classes["primary-promotion-title"]}>{title.toUpperCase()}</h2>
      <p className={classes["primary-promotion-description"]}>{description}</p>
    </div>
  );
};

export default React.memo(PrimaryPromotionCard);
