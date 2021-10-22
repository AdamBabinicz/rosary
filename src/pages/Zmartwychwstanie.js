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
          Chrześcijanie, którzy odpowiednio przygotowani przystępują do świętych
          sakramentów pokuty i Komunii, zmartwychwstają do życia duchowego, z tą
          jednak różnicą, że ci, co rezygnują z bliższych i dalszych pokus, tak
          jak Jezus pozostawił w grobie chustę i całun, nie grzeszą więcej. Ci
          natomiast, którzy po nawróceniu nie wyrzekają się odległej choćby
          okazji do grzechu, grzeszą znowu, podobnie jak Łazarz, który zabrawszy
          ze sobą chustę i całun, umarł po raz drugi.
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
          A zatem zmartwychwstań naprawdę, tak jak Jezus, rezygnując z wszelkich
          okazji do grzechu. W ten sposób dostąpisz zbawienia. Radość
          zmartwychwstałego Pana jest blaskiem miłości Ojca. Radość Jezusa jest
          nadzieją na wieczne szczęście. Jest palącym płomieniem miłości.
          Wielkanoc przynosi tę radość. Należy jednak pamiętać, że nie ma
          radości bez ofiary. To, dlatego Wielki Piątek poprzedza Wielkanoc.
          (...)
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
          O Boże (...) użycz mi silnej woli, abym mogła sięgać tam, gdzie sięgać
          najbardziej się waham, i wzniecać miłość tam, gdzie mnie odtrącono;
          użycz mi łaski, bym mogła w ciemnościach dojrzeć znak wiary, abym
          potrafiła ją zachować w samym środku zwątpienia.
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
