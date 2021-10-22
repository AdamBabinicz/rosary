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
          Matko Nieustającej Pomocy dziś doświadczamy wielu trudności. Twój
          obraz mówi nam bardzo wiele o Tobie. On przypomina nam, że docierasz
          do wszystkich i pomagasz tym, którzy znajdują się w potrzebie. Pomóż
          nam zrozumieć, że nasze życie należy do innych tak samo, jak należy do
          nas. Maryjo, bądź nam wzorem chrześcijańskiej miłości, wiemy że nie
          możemy uleczyć każdej choroby czy też rozwiązać każdego problemu, ale
          z Bożą łaską, chcemy czynić to, co możemy. Obyśmy dla świata byli
          prawdziwymi świadkami tego, że miłość wzajemna ma dla nas rzeczywiste
          znaczenie. Matko Nieustającej Pomocy, niech nasze codzienne działanie
          objawia, że Ty jesteś dla nas przykładem.
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

export default LearnMore;
