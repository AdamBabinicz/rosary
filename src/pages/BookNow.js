import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const BookNow = () => {
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
          }}
        >
          Na początku:
          <br /> Wierzę w Boga ...
          <br /> Ojcze nasz ...
          <br /> Zdrowaś Maryjo ... x 3 ( o wiarę, miłość i nadzieję). <br /> Na
          dużych paciorkach: Zdrowaś Maryjo ... x 10, <br /> Chwała Ojcu i
          Synowi, i Duchowi Świętemu. Jak była na początku, teraz i zawsze, i na
          wieki wieków. Amen.
          <br /> O mój Jezu, przebacz nam nasze grzechy, zachowaj nas od ognia
          piekielnego. Zaprowadź wszystkie dusze do nieba i dopomóż szczególnie
          tym, którzy najbardziej potrzebują Twojej pomocy. <br /> Przyjdź Duchu
          Święty, przyjdź dzięki potężnemu wstawiennictwu Niepokalanego Serca
          Maryi - Twojej umiłowanej Oblubienicy.
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

export default BookNow;
