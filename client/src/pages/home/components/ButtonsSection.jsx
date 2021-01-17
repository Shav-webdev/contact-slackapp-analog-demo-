import React from "react";
import classes from "../HomePage.module.scss"
import {Link} from "react-router-dom"
import { withNamespaces } from "react-i18next";

const ButtonsSection = ({t}) => {
  return(
    <div className={classes["buttons-section"]}>
      <Link className="ant-btn ant-btn-primary" to="/login">
        {t("Login")}
      </Link>
      <Link className="ant-btn ant-btn-primary" to="/register">
        {t("Register")}
      </Link>
    </div>
  )
}

export default React.memo(withNamespaces()(ButtonsSection))
