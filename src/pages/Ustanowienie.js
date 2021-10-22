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
          ofierze razem z Chrystusem, aby wraz z Nim być złamanymi i oddanymi
          najbiedniejszym z biednych. Eucharystia jest naszą chwałą i radością,
          jest tajemnicą naszego zjednoczenia z Chrystusem. (...)
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
          „Gorąco” pragnąłem spożyć tę Paschę z wami, zanim będę cierpiał (...).
          To jest Ciało moje, które za was będzie wydane: to czyńcie na moją
          pamiątkę” (Łk 22, 15. 19).
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
          Jezu, wiekuisty Kapłanie, Ty w Wieczerniku, spełniłeś Boskie
          pragnienie: ustanowiłeś Eucharystię jako Paschę Nowego Przymierza,
          którą jesteś Ty sam (por. 1 Kor 5, 7). Ale Twoje Boskie pragnienie
          ciągle się przedłuża. I tak będzie do końca świata. Uwielbiam Cię,
          Trójco Święta, w tajemnicy ustanowienia Eucharystii.
        </p>
        <Link
          to="/locations"
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
