import React from "react";
import classes from "./Nav.module.scss";
import Button from "../../UI/Button/Button";

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <a href="/">Start</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/locations">Różaniec</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/learnmore">Modlitwa</a>
        </li>
      </ul>
      <Button className={classes.booknow} onClick={menuToggle}>
        <a href="/moc">Moc Różańca</a>
      </Button>
    </nav>
  );
};

export default Nav;
