import React from "react";
import classes from "./Nav.module.scss";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <Link to="/">Start</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/różaniec">Tajemnice</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/maryja">Modlitwa</Link>
        </li>
      </ul>
      <Button className={classes.booknow} onClick={menuToggle}>
        <Link to="/moc">Moc Różańca</Link>
      </Button>
    </nav>
  );
};

export default Nav;
