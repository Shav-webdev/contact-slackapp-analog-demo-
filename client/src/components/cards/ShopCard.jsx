import React from "react";
import classes from "./Cards.module.scss";
import { Link } from "react-router-dom";

const ShopCard = ({ route, imgUrl, service, classname }) => {
  return (
    <Link to={route}>
      <div className={`${classes["shops-page-card"]} `}>
        <div
          className={` ${classes["shops-card-img"]} ${
            classname ? classname : ""
          }`}
        >
          <img src={imgUrl} alt="img" />
          <p>{service}</p>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ShopCard);
