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
          Bóg pragnie być blisko człowieka. Dlatego kiedy wchodzi do naszego
          serca wręcz wypycha nas byśmy biegli ku innym. Tego właśnie
          doświadczyła Maryja. Tuż po Zwiastowaniu wybrała się w podróż. Chciała
          pomóc swojej kuzynce Elżbiecie, która oczekiwała dziecka i była już w
          6 miesiącu ciąży. Maryja pragnie być blisko niej. Maryja pragnie
          służyć. Przyjmuje ją, a jednocześnie jest przez nią przyjęta.
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
          My, jako kobiety, mamy ogromny dar, aby przyjmować w sobie Boga i
          drugiego człowieka. Tego niewątpliwie możemy uczyć się od Maryi. To
          Ona właśnie przyjęła Jezusa i mogła potem przyjąć Elżbietę. Elżbieta
          poruszona przez przywitanie Maryi, przyjęła tajemnicę Jej życia. To,
          że jest Matką Zbawiciela. Obie głęboko radują się w Bogu.
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
