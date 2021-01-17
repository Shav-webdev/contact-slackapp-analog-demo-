import React from "react";
import classes from "./Cards.module.scss";
import { Link } from "react-router-dom";

const NewsCard = ({id, title, description, imageUrl }) => {
  return (
    <Link to={`/news/${id}`} >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={classes["news-card"]}
      >
        <div className={classes["news-card-highlight"]}>
          <div className={classes["news-meta"]}>
            <div className={classes["news-meta-section"]}>
              <h2 className={classes["news-title"]}>{title.toUpperCase()}</h2>
              <p className={classes["news-description"]}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default React.memo(NewsCard);
