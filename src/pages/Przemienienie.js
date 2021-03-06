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
          Eucharystia to manna duszy, bo podobnie jak ów pokarm smakował Żydom w
          różny sposób i zależnie od apetytu, tak samo święta Eucharystia
          smakuje tym, którzy ją przyjmują w zależności od potrzeb duszy, gdyż
          również u katolików różne są upodobania i skłonności, i każdego Bóg
          karmi wedle jego ducha.
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
          Tak, więc jednym daje upodobanie do pokory, innym do cierpliwości, do
          pobożności, do umartwienia i pokuty, a we wszystkich umacnia miłość.
          Starajcie się, zatem podsycać w sobie głód i pragnienie miłości,
          abyście osiągnęli poprzez świętą Eucharystię wszystkie te dobra.
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
