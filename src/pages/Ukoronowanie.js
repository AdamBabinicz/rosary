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
          Teraz Maryja ma swój pełny udział w królewskiej chwale Chrystusa.
          Pismo święte opisuje Ją jako Niewiastę obleczoną w słońce, z księżycem
          pod stopami i z wieńcem z dwunastu gwiazd na głowie. Oto jest nasza
          królowa, Królowa nieba i ziemi. Maryja ma tylko jedno pragnienie, aby
          wzrastało królestwo Jej Syna - Chrystusowa wspólnota. Jej panowanie
          wypełnione jest troską o nasze zbawienie, wytrwałą i mozolną pracą na
          zwrócenie nas na ścieżkę ku Bogu.
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
