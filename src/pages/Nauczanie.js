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
          Ziemia będzie dla mnie miejscem wygnania. Moje myśli, uczucia i
          westchnienia kierować się będą do nieba. Będę mówił i słuchał tylko
          tego, co dotyczy Boga i prowadzi do nieba. Jakże pragnę zjednoczyć się
          z Bogiem.
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
          Muszę być jak płonąca świeca: wypala wosk i daje światło, póki nie
          zgaśnie. Pragnę zjednoczyć się z Chrystusem w sakramencie i w niebie.
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
          Głośmy pokój Chrystusa tak, jak On go głosił. Jezus szedł przez życie,
          dobrze czyniąc. Nie zaprzestał wypełniać swego posłannictwa
          miłosierdzia wtedy, gdy faryzeusze i inni Jego przeciwnicy okazywali
          Mu nienawiść, gdy usiłowali zniszczyć dzieło Jego Ojca. (...).
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
          Rzeczą istotną w naszym życiu nie jest to, co mówimy, lecz jak
          wierzymy, jak żyjemy, jak kochamy i świadczymy o Jezusie Chrystusie,
          naszym Zbawicielu. (...) Środkiem najbardziej skutecznym w głoszeniu
          chrześcijaństwa poganom jest nasza radość, przekonanie o własnym
          szczęściu.
          <br /> (...) Jest rzeczą bardzo trudną, czasem wprost niemożliwą,
          głoszenie Jezusa innym ludziom, jeśli nie posiadamy Go w naszym sercu
          (...). „Nawrócić” znaczy doprowadzić do Boga. „Uświęcać” znaczy
          napełniać Bogiem...
        </p>
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
