import React from "react";
import classes from "./Location.module.scss";
import img1 from "../../assets/virgin.svg";
import img2 from "../../assets/chrzest.jpg";
import img3 from "../../assets/jezus.jpg";
import img4 from "../../assets/redentor.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const locationData = [
  {
    id: 1,
    location: "Tajemnice radosne",
    isFeatured: true,
    img: img1,
    links: "Zwiastowanie/NMP",
    links1: "Nawiedzenie/Św./Elżbiety",
    links2: "Narodzenie/Pana/Jezusa",
    links3: "Ofiarowanie/Pana/Jezusa/w/świątyni",
    links4: "Znalezienie/Pana/Jezusa",
  },
  {
    id: 2,
    location: "Tajemnice światła",
    isFeatured: true,
    img: img2,
    links5: "Chrzest/Pana/Jezusa",
    links6: "Cud/w/Kanie/Galilejskiej",
    links7: "Nauczanie/Pana/Jezusa",
    links8: "Przemienienie/Pańskie",
    links9: "Ustanowienie/Eucharystii",
  },
  {
    id: 3,
    location: "Tajemnice bolesne",
    isFeatured: true,
    img: img3,
    links10: "Modlitwa/Pana/Jezusa/w/Ogrójcu",
    links11: "Biczowanie/Pana/Jezusa",
    links12: "Cierniem/Ukoronowanie/Pana/Jezusa",
    links13: "Droga/Krzyżowa/Pana/Jezusa",
    links14: "Ukrzyżowanie/Pana/Jezusa",
  },
  {
    id: 2,
    location: "Tajemnice chwalebne",
    isFeatured: true,
    img: img4,
    links15: "Zmartwychwstanie/Pana/Jezusa",
    links16: "Wniebowstąpienie/Pana/Jezusa",
    links17: "Zesłanie/Ducha/Świętego",
    links18: "Wniebowzięcie/NMP",
    links19: "Ukoronowanie/NMP/na/Królową/Nieba...",
  },
];

const Locations = ({ page }) => {
  const mapData = !page ? locationData.slice(0, 6) : locationData;
  return (
    <div className={classes.container}>
      <div className={`${classes.locations} ${page ? classes.page : ""}`}>
        <div className={classes.locations__content}>
          <h2 className={classes.locations__content__title}>
            Tajemnice różańca
          </h2>
          <div className={classes.locations__content__gallery}>
            {mapData.map(
              ({
                id,
                location,
                isFeatured,
                img,
                links,
                links1,
                links2,
                links3,
                links4,
                links5,
                links6,
                links7,
                links8,
                links9,
                links10,
                links11,
                links12,
                links13,
                links14,
                links15,
                links16,
                links17,
                links18,
                links19,
              }) => (
                <div className={classes.gallery__item} key={id}>
                  <img
                    src={img}
                    alt={location}
                    className={classes.gallery__item__img}
                  />
                  <div className={classes.overlay} />
                  <div className={classes.gallery__item__content}>
                    <h2 className={classes.gallery__item__content__location}>
                      <IoLocationOutline />
                      <strong>{location}</strong>
                    </h2>
                    <div className={classes.gallery__item__content__link}>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links}
                      >
                        {links}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links1}
                      >
                        {links1}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links2}
                      >
                        {links2}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links3}
                      >
                        {links3}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links4}
                      >
                        {links4}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links5}
                      >
                        {links5}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links6}
                      >
                        {links6}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links7}
                      >
                        {links7}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links8}
                      >
                        {links8}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links9}
                      >
                        {links9}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links10}
                      >
                        {links10}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links11}
                      >
                        {links11}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links12}
                      >
                        {links12}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links13}
                      >
                        {links13}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links14}
                      >
                        {links14}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links15}
                      >
                        {links15}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links16}
                      >
                        {links16}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links17}
                      >
                        {links17}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links18}
                      >
                        {links18}
                      </Link>
                      <Link
                        className={classes.gallery__item__content__link__l}
                        to={links19}
                      >
                        {links19}
                      </Link>
                    </div>
                  </div>
                  {isFeatured && (
                    <div className={classes.gallery__item__tag}>1-5</div>
                  )}
                </div>
              )
            )}
          </div>
          {!page && (
            <div className={classes.locations__content__viewmore}>
              <Link to="/booknow">
                Jak odmawiać różaniec <BsArrowRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Locations;
