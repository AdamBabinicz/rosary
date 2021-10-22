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
          Pomyśl, że nie jesteś stworzony do życia ziemskiego, lecz dla nieba.
          Niebo to twoja ojczyzna. Tam masz twego Ojca, którym jest Bóg, twą
          Matkę, którą jest Najświętsza Maryja, i twoich braci, przyjaciół i
          towarzyszy, którymi są aniołowie i święci. Jesteś na ziemi
          pielgrzymem. Na ziemi nie doświadczysz pełni. Wszystko zajmuje cię
          przez jakiś czas, a potem nuży.
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
          Kochaj Boga prawdziwie, pragnij gorliwie pójść do nieba, przysposabiaj
          się, gromadząc dobre uczynki, i bądź zawsze gotowy. Jezus wybrał nas
          sobie tak, jak wybrał kiedyś Apostołów (...). Powinniśmy żyć w
          przekonaniu, że należymy do Niego i nie pozwolić, by cokolwiek, nawet
          najdrobniejszego, oddaliło nas od tej przynależności, od Jego miłości
          (...).
        </p>
        {/* <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8rem",
            textTransform: "none",
            textAlign: "left",
            fontWeight: "lighter",
            marginBottom: "1rem",
          }}
        >
          Po wniebowstąpieniu Jezusa, Matka Boża w szczególny sposób opiekowała
          się Apostołami pierwszego Kościoła. Również dzisiaj Matka Boża otacza
          nas swą macierzyńską opieką.
        </p> */}
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
