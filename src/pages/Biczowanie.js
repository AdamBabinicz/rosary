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
          Ofiaruje Ci Panie Jezu ten siódmy dziesiątek ku czci Twojego krwawego
          Biczowania i męki, i proszę Cię przez te Tajemnice i przez
          wstawiennictwo Twojej Świętej Matki o doskonale zrozumienie tej
          tajemnicy i umartwienie moich zmysłów.
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
          Niech laska biczowania Pana Jezusa wstąpi do mojej duszy i uczyni ja
          naprawdę umartwioną - "bądź milłściw mnie grzesznemu" całym sercem
          skruszonym.
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
          Kiedy mój obraz Twoich ran zniknie, wtedy lękam się spojrzeć Ci prosto
          w oczy, ale ... .
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
