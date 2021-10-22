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
          Eucharystia znaczy tyle, co miłość, która rozumie. Chrystus rozumiał
          nasz straszliwy głód Boga. Rozumiał, że zostaliśmy stworzeni po to, by
          być kochani — dlatego uczynił siebie Chlebem życia (...).
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
          Aby dzielić z Jezusem miłość, która rozumie, musisz spożywać ten Chleb
          (...). Msza święta jest naszą modlitwą dnia — składamy siebie w
          ofierze razem z Chrystusem, aby ... .
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
          Msza święta jest pokarmem duchowym, który mnie podtrzymuje, bez
          którego nie dałabym rady przeżyć ani jednego dnia czy godziny. (...)
          Nasze uczestnictwo w Eucharystii jest niepełne, jeśli nie prowadzi do
          służby i miłowania ubogich.
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
