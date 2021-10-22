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
          Maryja wraz z ciałem została wzięta do nieba, nikt inny, tylko Ona
          dostąpiła tej chwały. Dlaczego? Bo jak nikt inny pełniła wolę Boga,
          żyjąc na ziemi. A jak żyła? Tak mówią o Niej słowa pieśni: “Była cicha
          i piękna jak wiosna, żyła prosto, zwyczajnie jak my. Ona Boga na świat
          nam przyniosła i na ziemi wśród łez nowe dni zajaśniały. Matka, która
          wszystko rozumie, sercem ogarnia każdego z nas.”
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
          Bo jest jedną z nas. Jej życie na ziemi nie było pozbawione ludzkich
          problemów: zwykłych trosk, cierpienia, udręk, bólu, pomimo tego (a
          może właśnie, dlatego), że była Matką Boga, a więc tak blisko Niego.
          Musiała tak wiele wycierpieć. I cierpiała, lecz jak? W łączności z
          Bogiem, bo tylko takie cierpienie ma sens.
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
