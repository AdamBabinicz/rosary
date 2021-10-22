import React from "react";
import classes from "./Logo.module.scss";
import { BiChurch } from "react-icons/bi";

const Logo = () => {
  return (
    <a href="/" className={classes.logo}>
      <BiChurch fillColor={"#fff"} />
      <span>Bóg Cię kocha</span>
    </a>
  );
};

export default Logo;
