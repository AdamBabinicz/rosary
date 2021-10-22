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
          Każdy człowiek pragnie, aby go podziwiano i chwalono, aby ludzie go
          zauważali i dostrzegali w nim tylko to, co najlepsze i tylko to, co on
          chce, aby w nim widziano. Wielu, aby zwrócić na siebie uwagę innych i
          niejako zmusić ich do wyrażania swojego podziwu posuwa się do podstępu
          lub kłamstwa. Niejeden dla tych kilku chwil uznania stara się zamącić
          prawdę o sobie, udaje, że jest kimś innym, wybiela swój wizerunek lub
          po prostu oddaje się samochwalstwu.
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
