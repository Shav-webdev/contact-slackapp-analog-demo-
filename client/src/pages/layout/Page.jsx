import React from "react";
import { Loader } from "../../components/loader/Loader";
import classes from "./Page.module.scss";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Page = ({ children }) => {
  const location = useLocation();
  const path = location.pathname?.split("/").join(" ");
  const loading = useSelector(state => state.app.loading);
  return (
    <div className={`${classes["page"]} ${path ? path : "home"}`}>
      <div>{children}</div>
      {loading && (
        <div className={classes["spinner-wrapper"]}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default React.memo(Page);
