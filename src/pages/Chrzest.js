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
          Przychodzimy na świat obciążeni grzechem pierworodnym (z wyjątkiem
          Dziewicy Maryi, która została od niego zachowana) i jesteśmy
          potomstwem zasługującym na gniew i potępienie. Bóg, Pan nasz, mógł
          pozostawić ludzi w tym opłakanym stanie i wtrącić ich do piekła, jak
          zbuntowanych aniołów. Nie postąpiłby niesprawiedliwie, bo nawet
          ludzkie prawo karze przestępcę, nie czekając, aż popełni nową
          zbrodnię. Ale Bóg okazał nam litość i kiedy ukarał Adama i Ewę
          wypędzeniem z raju, obiecał im Wyzwoliciela, Odkupiciela.
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
