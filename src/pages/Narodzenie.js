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
          Tej nocy w Betlejem nie było niczego, czego mogła potrzebować Maryja.
          Nie było ciepłego domu ani kobiet, które mogłyby być jej pomocne. A
          jednak tej nocy Jezusowi niczego nie zabrakło. Został On otoczony
          najczulszą miłością Maryi i Józefa.
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
          Maryja jest niesamowita! Potrafi uczynić coś prawie z niczego.
          Przecież to Ona zamieniła zwyczajną stajnię dla zwierząt w przytulny
          dom. Jej spojrzenie, Jej delikatność, Jej czułość otoczyły Jezusa.
          Dlatego też, dostał wszystko czego potrzebował w pierwszych chwilach
          swojego ziemskiego życia.
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
