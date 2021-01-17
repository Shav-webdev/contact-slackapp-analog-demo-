import React, { useState } from "react";
import classes from "./Header.module.scss";

const Header = props => {
    return (
    <header className={`${classes["header"]} ${props.className}`}>

    </header>
  );
};

export default React.memo(Header);
