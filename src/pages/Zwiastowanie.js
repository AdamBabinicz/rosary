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
          Każdy z nas byłby zaskoczony tą sytuacją. Oto przychodzi anioł i mówi
          “będziesz matką”. “Będziesz Matką Syna Bożego”. “Będzie On nazwany
          Synem Najwyższego”. Wobec tej sytuacji Maryja pyta jak się to stanie i
          po zupełnie niezwykłym wyjaśnieniu anioła mówi “tak, zgadzam się,
          niech się dzieje wola Pana Boga”.
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
          Oddała wszystko, co miała – swoje plany, swoją cielesność, swój czas.
          Oddała wszystko, a Bóg dał jej jeszcze więcej. Jej postawa uczy nas
          “To, co daje Bóg: chwile, mgnienia dni, Ty w Miłości je oddaj”.
          Maryjo, ucz nas oddawania tego, co dla nas najcenniejsze, byśmy mogli
          otrzymać jeszcze więcej.
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
