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
          W człowieku chorym lub przygniecionym przez krzyż pracy i cierpienia
          dostrzegać masz osobę Jezusa, a w efekcie naśladować postępowanie
          córek jerozolimskich. Okaż Mu współczucie. Naśladuj Weronikę,
          wycierając Biedakowi twarz, ocierając Mu łzy i pot całunem
          miłosierdzia. Naśladuj też Szymona Cyrenejczyka, pomagając w niesieniu
          krzyża. Bądź przy Nim jak Najświętsza Maryja i nie opuść Go aż do
          śmierci.
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
          O, jak że wielką będziesz miał zasługę w niebie! Wszędzie dziś
          napotykamy cierpienia duszy i ciała. Także do twego życia wkroczył ból
          i cierpienie, ale pamiętaj, że twój ból, smutek i cierpienie są niczym
          ... .
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
