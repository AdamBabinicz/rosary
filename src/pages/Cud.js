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
          Podczas godów w Kanie ta miłościwa Pani spostrzega troskę i niepokój
          gospodarzy uczty. Natychmiast okazuje współczucie i Jej gorliwa miłość
          sprawia, że na tym nie poprzestaje, lecz pragnie przyjść z pomocą. I
          co czyni, aby im pomóc? Zwraca się zaraz do Syna i wypowiada te proste
          słowa: Nie mają wina! I Syn dla Maryi spieszy z pomocą gospodarzom
          uczty, i to w chwili, gdy nie nadeszła jeszcze godzina, aby ujawnić
          się i zacząć publiczną działalność.
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
          Najświętsza Dziewico, skoro ulitowałaś się nad małżonkami z Kany
          Galilejskiej i wybawiłaś ich z opresji, uproś Go również, aby uczynił
          dla mnie podobny cud i obdarzył łaskami, których potrzebuję, aby
          godnie Go przyjąć.
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
          Współczuj Maryi w cierpieniach, których przysparzają Jej współbracia,
          bo nie dość, że grzesząc, doprowadzili do zguby Jej Syna, to oddalają
          się od Niego coraz bardziej, zamiast Go poszukiwać, i w ten sposób
          mnożą własne winy, odkładając z dnia na dzień swe nawrócenie. Proś
          Boga o na wrócenie dla nich.
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
