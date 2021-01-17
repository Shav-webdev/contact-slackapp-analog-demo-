import React from "react";
import classes from "./Cards.module.scss";
import { Link } from "react-router-dom";
import { withNamespaces, getI18n } from "react-i18next";

const PleasureCard = ({ t, pleasure }) => {
  const { title, imgUrl, id } = pleasure;
  return (
    <div className={classes["pleasure-card"]}>
      <Link className={classes["pleasure-card-link"]} to={`/pleasure/${id}`}>
        <img
          className={classes["pleasure-img"]}
          src={imgUrl}
          alt={`Garage mall ${title}`}
        />
        <div className={classes["pleasure-meta"]}>
          <h3 className={classes["pleasure-title"]}>
            {title[`${getI18n().language}`]}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(withNamespaces()(PleasureCard));
