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
          Kiedy mój obraz Twoich ran zniknie, wtedy lękam się spojrzeć Ci prosto
          w oczy, ale kiedy już to uczynię i ujrzę uśmiech Twoich oczu,
          natychmiast odczuwam nieokreślona Miłość Ojcowska i ulgę, że wszystko
          jest dobrze.
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
          Jeszcze jedna modlitwa, jeszcze jeden Różaniec, jeszcze jeden dzień w
          Twoich kojących każdy ból Ramionach, a nie łatwo jest cudzy ciężar
          wziąć na własne ramiona; Ty Panie nie tylko wziąłeś mój ciężar
          grzechów - Ty za nie zapłaciłeś chłostą, cierpieniem i śmiercią.
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
          Wejdź w moje życie Panie razem z Krzyżem i naucz mnie ofiarować moje
          cierpienia za niesprawiedliwych, za złoczyńców, za ludzi pogrążonych w
          nałogach, w wewnętrznej samotności i takich, którzy jeszcze nie wierzą
          ….
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
