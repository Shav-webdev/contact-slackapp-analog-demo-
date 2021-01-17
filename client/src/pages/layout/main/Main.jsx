import React from "react";
import classes from "./Main.module.scss"

const Main = (props) => {
  return (
    <main className={classes["main"]} style={props.style}>
      {props.children}
    </main>
  )
}

export default React.memo(Main)
