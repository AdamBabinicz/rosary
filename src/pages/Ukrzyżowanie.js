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
