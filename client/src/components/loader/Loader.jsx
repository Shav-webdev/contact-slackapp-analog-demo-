import React from "react";
import classes from "./loader.module.scss"

export const Loader = () => {
  return (
    <div className={classes["lds-ripple"]}>
      <div/>
      <div/>
    </div>
  )
}