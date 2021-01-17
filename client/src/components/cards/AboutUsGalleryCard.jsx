import React from "react";
import classes from "./Cards.module.scss";

const AboutUsGalleryCard = ({ icon }) => {
  return (
    <div className={classes["about-us-img-wrapper"]}>
      <img
        className={classes["about-us-img"]}
        src={icon}
        alt="Garage Masters Mall"
      />
    </div>
  );
};

export default React.memo(AboutUsGalleryCard);
