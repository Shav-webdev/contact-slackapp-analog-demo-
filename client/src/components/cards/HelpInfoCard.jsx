import React from "react";
import classes from "./Cards.module.scss";
import { Link } from "react-router-dom";

const HelpInfoCard = ({route,imgUrl,cardText}) => {
  return (
    <Link to={route}>
        <div className={classes["help-info-card"]}>
          <img src={imgUrl} alt="img" />
          <p>{cardText}</p>
        </div>
    </Link>
  );
};

export default React.memo(HelpInfoCard);
