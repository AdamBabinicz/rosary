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
          Jezus był dla Maryi wielkim darem Boga. Ale Maryja całe życie uczyła
          się oddawać Go Ojcu i światu. Przynosi Go do świątyni i słyszy, że
          będzie On wielkim znakiem sprzeciwu, a jej duszę przeniknie miecz.
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
          Maryja to kobieta niesamowicie wolna. Wolna, aby dać nam Jezusa.
          Maryja uczy nas więc wolności i miłości, która czyni nas coraz
          bardziej wolnymi. Uczy nas tego, że możemy innych nie posiadać, nie
          być zaborcze, nie dominować.
          <br /> Dlatego, że w pewnym momencie nasze serca muszą przypominać
          gniazda. Gniazda, które pozostają puste. Osoby, które kochamy i o
          które się troszczymy, tak jak ptaki, wzlatują do nieba.
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
