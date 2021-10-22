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
          Chrystus nadal żyje i działa w kościele za pomocą Ducha Świętego,
          którego zesłał na Maryję i apostołów w Wieczerniku. Przez to Maryja
          stała się nie tylko naszą matką, ale również matką i opiekunką całego
          kościoła. Nie możemy, więc czuć się opuszczeni albowiem im ściślej
          jesteśmy zjednoczeni z kościołem tym głębiej wzrastamy w Chrystusie
          dzięki mocy Ducha Świętego, który w nim działa. Maryja jak na początku
          tak i dziś umacnia nas w miłości do Kościoła, coraz głębiej wprowadza
          nas w jego życie a przez to prowadzi nas do swego Syna, do Ducha
          Świętego i do Boga Ojca. Swą matczyną troską otacza tą największą
          Chrystusową spuściznę. Maryjo upraszaj nam dary Ducha Świętego abyśmy
          byli przykładem żywej wiary, dobrymi dziećmi Kościoła i abyśmy nie
          ustawali w poznawaniu Boga.
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
          Bo jest jedną z nas. Jej życie na ziemi nie było pozbawione ludzkich
          problemów: zwykłych trosk, cierpienia, udręk, bólu, pomimo tego (a
          może właśnie, dlatego), że była Matką Boga, a więc tak blisko Niego.
          Musiała tak wiele wycierpieć. I cierpiała, lecz jak? W łączności z
          Bogiem, bo tylko takie cierpienie ma sens.
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
