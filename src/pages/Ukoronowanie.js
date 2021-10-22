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
          Królowanie Maryi spływa na całą ziemię. Jest Ona Królową całej
          ludzkości i poszczególnych narodów. Jest Królową Polski, ale również
          Królową naszych serc. Pozwólmy jej rządzić nami na chwałę i pożytek
          królestwa wiecznego. Wpatrujemy się w Niepokalaną Dziewicę z Nazaretu,
          Matkę pięknej miłości. Niech ona towarzyszy ludziom wszystkich czasów,
          ludziom naszych czasów w ich pielgrzymce wiary do domu Ojca.
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
          Bądź z nami w każdy czas Bogurodzico, która jesteś czcigodniejszą od
          cherubinów i nieporównanie sławniejszą od serafinów. Prowadź nas Twoją
          wiarą w nowy czas, który się przed nami otwiera. Bądź z nami wraz z
          Twoim Synem, Jezusem Chrystusem, który sam chce być dla nas drogą,
          prawdą i życiem.
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
          Bóg uwielbił Matkę Najświętszą. Pokorna Służebnica Pańska, za swą
          miłość i wypełnienie woli Bożej, została Królową nieba i ziemi. Jest
          naszą wspomożycielką i orędowniczką przed Bogiem. Na Nią możemy zawsze
          liczyć. Maryja o nas pamięta, rozumie nas i pomaga nam trwać w dobrym.
          Ona, Królowa Wszechświata, Pani nieba i ziemi wstawia się za nami i
          śpieszy z pomocą tym, którzy Ją o to proszą. Pani nieba i ziemi, módl
          się za nami, którzy się do Ciebie uciekamy.
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
