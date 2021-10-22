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
          Na Golgocie Jezus składa za nas w ofierze swoje życie. Wybiła godzina
          naszego odkupienia. Przedziwna jest tajemnica śmierci Chrystusa, który
          przez śmierć swoją uśmiercił śmierć naszą i przywrócił nam życie.
          Odkupiciel przekroczył jej wrota, aby je dla nas na zawsze skruszyć.
          Syn Boży poddał się prawu śmierci, ale Matkę swoją przed nią uchronił.
          Dopuścił tylko do zaśnięcia, ale zaraz sprawił cud wniebowzięcia.
          Przez to chciał powiedzieć, jak skuteczna jest Jego męka dla każdego z
          nas.
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
          Matko życia, Ty staniesz na czele orszaku zmartwychwstałych, bo Ciebie
          nie dotknął cień śmierci. Wielbimy cię w tym wielkim przywileju, który
          wysłużył Ci Twój Syn. Pragniemy podążać za Tobą i innych tą drogą
          prowadzić. Wiedz, że nikt nie ma większej miłości niż ten, kto oddaje
          życie za przyjaciela. Jezus oddał je za ciebie, a więc cię kocha.
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
          Za miłość należy odpłacać miłością. Kochaj Go, zatem prawdziwie.
          Okażesz Mu miłość, jeśli zachowasz Jego przykazania i przystępować
          będziesz często do świętych sakramentów. Jak mówi, św. Paweł, kto
          grzeszy, ponownie przybija Jezusa do krzyża. Natomiast ten, kto się
          spowiada, zdejmuje Go z krzyża. Józef Arymatel dał Mu na pochówek
          własny grobowiec. Ty dasz Mu swoje serce, w którym Go umieścisz i
          będziesz gościł w Komunii wraz z wonnościami cnót wiary, nadziei,
          miłości i pokory.
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
