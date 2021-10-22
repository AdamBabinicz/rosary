import React from "react";
import Button from "../../UI/Button/Button";
import {
  // FaYoutube,
  // FaInstagram,
  // FaTwitter,
  // FaSnapchatGhost,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
import Logo from "../../UI/Logo/Logo";
import img from "../../assets/rosary.png";

const footerColumns = [
  {
    id: 1,
    headline: "Polityka prywatności",
    links: ["Czytaj"],
  },
  // {
  //   id: 2,
  //   headline: "Filmy",
  //   links: [],
  // },
  // {
  //   id: 3,
  //   headline: "Modlitwy do NMP",
  //   links: [],
  // },
  // {
  //   id: 4,
  //   headline: "Część chwalebna",
  //   links: [],
  // },
];

const socials = [
  // <FaYoutube />,
  // <FaInstagram />,
  // <FaTwitter />,
  // <FaSnapchatGhost />,
  <FaFacebook />,
];

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footer__newsletter}>
          <h4 className={classes.footer__newsletter__headline}>
            Psałterz Najświętszej Maryi Panny
          </h4>
          <span>Wieniec z róż.</span>
          {/* <div className={classes.footer__newsletter__form}>
            <input
              className={classes.input}
              type="email"
              placeholder="Twój Email"
            />
            <Button>Napisz</Button>
          </div> */}
          <img src={img} alt="..." />
        </div>
        <div className={classes.footer__content}>
          {footerColumns.map(({ id, headline, links }) => (
            <div className={classes.footer__content__col} key={id}>
              <div className={classes.footer__content__col__headline}>
                {headline}
              </div>
              <ul className={classes.footer__content__col__links}>
                {links.map((link, index) => (
                  <li key={index + 1}>
                    <Link to={link}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={classes.footer__base}>
          <Logo />
          <span className={classes.footer__base__year}>
            Radom&nbsp;&nbsp;2021-{new Date().getFullYear()}
          </span>
          <ul className={classes.footer__base__socials}>
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <a
                  href="https://www.facebook.com/groups/2832353690357944"
                  target="_blank"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
