import React from "react";
import Aux from "../../hoc/Auxi";
import classes from "./Layout.module.css"
import Nav from "../Navigation/Nav";

const layout = (props) => {
  return <Aux>
    <Nav />

    <main className={classes.Content}>{props.children}</main>

  </Aux>
}

export default layout;