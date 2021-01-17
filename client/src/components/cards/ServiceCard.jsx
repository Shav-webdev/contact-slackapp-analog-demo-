import React from "react";
import classes from "./Cards.module.scss";
import { Link } from "react-router-dom";
import { Hexagon } from "../icons";

const ServiceCard = ({ service }) => {
  const { title_hy, imgUrl, route, icon } = service;
  return (
    <Link to={route}>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        className={classes["service-card"]}
      >
        <div className={classes["service-meta"]}>
          <div className={classes["service-meta-section"]}>
            <div className={classes["service-icon-wrapper"]}>
              <div className={classes["service-icon-wrapper-hexagon"]}>
                <Hexagon />
                <div className={classes["service-icon"]}>{icon}</div>
              </div>
            </div>

            <h3 className={classes["service-title"]}>{title_hy}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ServiceCard);
