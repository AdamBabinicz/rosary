import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Pricing = () => {
  useScrollToTop();
  return (
    <>
      <Hero isDynmic>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8rem",
            textTransform: "none",
            textAlign: "left",
            fontWeight: "lighter",
            marginBottom: "1rem",
          }}
        >
          Jezus klęczy w ogrodzie na Górze Oliwnej. Przed Nim grzechy wszystkich
          ludzi, dookoła otacza Go niewdzięczność, niewierność i zdrada. W tę
          straszną noc wszyscy Go opuszczają. Ci, co Go niedawno chcieli obwołać
          królem, teraz gotują Jego mękę i zgubę.
        </p>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8rem",
            textTransform: "none",
            textAlign: "left",
            fontWeight: "lighter",
            marginBottom: "1rem",
          }}
        >
          Nad uśpionym w dolinie miastem, na szczycie góry, niejako zawieszony
          miedzy niebem a ziemią Chrystus bierze gorzki kielich zbawienia. Za
          grzechy ludzkości Jezus przyjmuje wszystko na siebie.
        </p>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8rem",
            textTransform: "none",
            textAlign: "left",
            fontWeight: "lighter",
            marginBottom: "1rem",
          }}
        >
          Ale Maryja w tę noc modli się razem z Panem, choć nie ma Jej z
          uczniami. Ona Niepokalanie Poczęta, będzie nas zawsze wspomagać,
          abyśmy z łaską Chrystusa zwyciężali grzech. Jesteśmy z Tobą,
          Służebnico Pańska, w męce Pana naszego Jezusa Chrystusa. Módl się za
          nami grzesznymi!
        </p>
        <Link
          to="/różaniec"
          style={{
            color: "#cccccc",
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <BsFillArrowLeftCircleFill />
        </Link>
      </Hero>
    </>
  );
};

export default Pricing;
