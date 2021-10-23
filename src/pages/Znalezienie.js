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
          Maryja nie zawsze miała radosne momenty w swoim życiu. Były też takie,
          które przejmowały ją trwogą, jak ten, kiedy zgubiła dwunastoletniego
          Jezusa w czasie ich pielgrzymki do Jerozolimy. Maryja nie zrozumiała
          tego wydarzenia, podobnie jak nie zrozumiała wtedy odpowiedzi swojego
          syna. „Czemuście Mnie szukali? Czy nie wiedzieliście, że powinienem
          być w tym, co należy do mego Ojca?” (Łk 2, 49).
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
          Maryja jednak nie buntuje się, nie zamyka swojego serca. Nie szuka też
          w sztuczny sposób wytłumaczenia, ale pozwala, by w jej życiu
          zaistniała tajemnica. Tajemnica to odkrywanie coraz głębszego sensu i
          światła.
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
