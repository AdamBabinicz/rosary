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
          Jezus klęczy w ogrodzie na Górze Oliwnej. Przed Nim grzechy wszystkich
          ludzi, dookoła otacza Go niewdzięczność, niewierność i zdrada. W tę
          straszną noc wszyscy Go opuszczają. Ci, co Go niedawno chcieli obwołać
          królem, teraz gotują Jego mękę i zgubę.
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
          Nad uśpionym w dolinie miastem, na szczycie góry, niejako zawieszony
          miedzy niebem a ziemią Chrystus bierze gorzki kielich zbawienia. Za
          grzechy ludzkości Jezus przyjmuje wszystko na siebie.
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
          Ale Maryja w tę noc modli się razem z Panem, choć nie ma Jej z
          uczniami. Ona Niepokalanie Poczęta, będzie nas zawsze wspomagać,
          abyśmy z łaską Chrystusa zwyciężali grzech. Jesteśmy z Tobą,
          Służebnico Pańska, w męce Pana naszego Jezusa Chrystusa. Módl się za
          nami grzesznymi!
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
          Panie Jezu agonia Twojej modlitwy to początek mojego zbawienia. Ty
          Królu mój, zbawicielu walczysz o moją duszę. Twoja modlitwa to
          godzina, w której przyjmujesz moją winę, moje śmiertelne grzechy i
          miliardy grzechów całego świata. To jeszcze nie droga krzyżowa na
          Golgotę, to tylko ofiara, to tylko modlitwa. Ale jakże wymowna,
          długotrwała, pobożna, cierpliwa, z miłością i Twoim poświęceniem.
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
          Czy moja modlitwa jest tak wytrwała i chętna, pobożna ofiarna za ten
          cały dzień i spokojną noc, za rodziców i rodzeństwo? Czy umiem
          zaprosić do modlitwy kogoś bliskiego, męża, żonę, córkę lub brata, czy
          tylko może zmówię z chęcią pobożnie za nich westchnienie do Boga? A
          jakże była by milsza Tobie Chryste, gdybym ofiarowała ją za moich
          wrogów, nieprzyjaciół. Panie, naucz jak uwielbiać i być Ci oddanym.
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
          Prosimy Ciebie nasza Matko, Matko naszego zbawiciela, abyś nas
          wspierała swoją cierpliwością i pokorą, i uczyniła nasze serca pełne
          zapału i miłości do modlitwy. Pragniemy to czynić z głębi naszych
          serc. Wspieraj nas, Matko, matko bolesna, matko modląca się z Jezusem
          w Ogrójcu.
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
