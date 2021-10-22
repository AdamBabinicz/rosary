import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const LearnMore = () => {
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
          1. Tym, którzy będą pobożnie odmawiali Różaniec, obiecuję szczególną
          opiekę.
          <br /> 2. Dla tych, którzy będą wytrwale odmawiali Różaniec, zachowam
          pewne szczególne łaski.
          <br /> 3. Różaniec będzie potężną bronią przeciwko piekłu; zniszczy
          występek i rozgromi herezję.
          <br /> 4. Różaniec doprowadzi do zwycięstwa cnoty i dobra; w miejsce
          miłości do świata wprowadzi miłość do Boga i obudzi w sercach ludzi
          pragnienie szukania nieba.
          <br /> 5. Ci, którzy zawierzą mi się przez Różaniec, nie zginą.
          <br /> 6. Ci, którzy ... .
        </p>
        <Link
          to="/"
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

export default LearnMore;
