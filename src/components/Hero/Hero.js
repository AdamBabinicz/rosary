import React, { useState } from "react";
import classes from "./Hero.module.scss";
import coverVID from "./../../assets/santa.mp4";
import Button from "../../UI/Button/Button";
import Modal from "../../components/Portal/Modal";
import img from "../../assets/roza.jpg";
import { Link } from "react-router-dom";

const HomePageContent = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <h1 className={classes.hero__content__title}>
        DO NAJŚWIĘTSZEJ MARYI PANNY, KRÓLOWEJ POLSKI
      </h1>
      <span className={classes.hero__content__tagline}>
        Módl się za nami, Królowo, Ozdobo Karmelu.
      </span>
      <p className={classes.hero__content__description}>
        Wspomagaj, Panie, lud, który pokrzepiłeś Ciałem i Krwią swoją, i za
        pośrednictwem Najświętszej Rodzicielki Twojej uwolnij go od wszelkiego
        zła i niebezpieczeństwa, i osłaniaj opieką wszystkie jego dzieła. Który
        żyjesz i królujesz na wieki wieków. Amen.
      </p>
      <div className={classes.hero__content__cta}>
        <Button>
          <Link to="/booknow">Jak odmawiać</Link>
        </Button>
        <Button onClick={() => Toggle()} outline>
          Więcej
        </Button>
        <Modal show={modal} close={Toggle} title="Różaniec">
          <img src={img} alt="..." />
          {/* <p></p> */} <br />
          <br />
          <p>
            <em>vaidotuparapija.lt/pl/index.php/home/miesiac-rozancowy</em>
          </p>
        </Modal>
      </div>
    </>
  );
};

const Hero = ({ isDynmic, children }) => {
  return (
    <div className={classes.container}>
      <video
        autoPlay={true}
        muted
        loop
        className={classes.video}
        id={"video"}
        src={coverVID}
      ></video>
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          {!isDynmic && <HomePageContent />}
          {isDynmic && (
            <h2 className={classes.hero__content__title}>{children}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
