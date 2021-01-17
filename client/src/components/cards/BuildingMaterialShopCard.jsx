import React from "react";
import classes from "./Cards.module.scss";
import { Link } from "react-router-dom";
import { withNamespaces, getI18n } from "react-i18next";

const BuildingMaterialShopCard = ({ t, shop }) => {
  const { title, imgUrl, description, id } = shop;
  return (
    <div className={classes["building-shop-card"]}>
      <Link className={classes["building-shop-card-link"]} to={`/shop/${id}`}>
        <img
          className={classes["building-shop-img"]}
          src={imgUrl}
          alt="Garage mall shops"
        />
        <div className={classes["building-shop-meta"]}>
          <h3 className={classes["building-shop-title"]}>
            {title[`${getI18n().language}`]}
          </h3>
          <p className={classes["building-shop-description"]}>
            {description[`${getI18n().language}`]}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(withNamespaces()(BuildingMaterialShopCard));
