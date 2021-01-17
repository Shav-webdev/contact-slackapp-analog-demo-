import React from "react";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";

const HomeBtn = ({ t }) => (
  <Link className="ant-btn ant-btn-link" to="/">
    {t("Back to home page")}
  </Link>
);

export default React.memo(withNamespaces()(HomeBtn));
