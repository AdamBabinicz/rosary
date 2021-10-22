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
          Maryja wraz z ciałem została wzięta do nieba, nikt inny, tylko Ona
          dostąpiła tej chwały. Dlaczego? Bo jak nikt inny pełniła wolę Boga,
          żyjąc na ziemi. A jak żyła? Tak mówią o Niej słowa pieśni: “Była cicha
          i piękna jak wiosna, żyła prosto, zwyczajnie jak my. Ona Boga na świat
          nam przyniosła i na ziemi wśród łez nowe dni zajaśniały. Matka, która
          wszystko rozumie, sercem ogarnia każdego z nas.”
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
          Bo jest jedną z nas. Jej życie na ziemi nie było pozbawione ludzkich
          problemów: zwykłych trosk, cierpienia, udręk, bólu, pomimo tego (a
          może właśnie, dlatego), że była Matką Boga, a więc tak blisko Niego.
          Musiała tak wiele wycierpieć. I cierpiała, lecz jak? W łączności z
          Bogiem, bo tylko takie cierpienie ma sens.
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
          My pragniemy szczęścia i Maryja, ta jedna z nas, mówi nam, czym ono ma
          być tu na ziemi. Szczęście to odkryć Boga i być blisko Niego, by od
          Niego czerpać siłę do pokonywania trudów życia, żeby nawet wtedy
          pełnić Jego wolę, bo życie bez Boga prowadzi donikąd. Ty najlepiej o
          tym wiesz, Maryjo. Nie chcemy zdążać donikąd.
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
          Matko kochana, prosimy Cię, przygarnij nas do siebie, byśmy za Tobą
          poszli drogą prowadzącą do Boga, naszego Ojca. Bądź naszą nadzieją na
          niebo, Wniebowzięta wraz z ciałem. Pokornie błagamy, pamiętaj o nas
          teraz i w godzinie śmierci naszej. Amen.
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
          Naśladuj Najświętszą Maryję, bądź wierny łasce, zmierzaj zawsze do
          doskonałości, nigdy nie mów dość. Jeśli możesz, codziennie uczestnicz
          we Mszy, odmawiaj Różaniec, czytaj dobrą książkę, bądź zawsze z Bogiem
          i ofiarowuj Mu wszystkie swe czyny i cierpienia. Przyjmuj często
          święte sakramenty, ćwicz się w uczynkach miłosierdzia.
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
          Jeśli czyniąc dobro, wytrwasz do końca, czeka cię dobra i szczęśliwa
          śmierć, a potem korona chwały, której tak bardzo powinieneś pragnąć. A
          jeżeli nie, cóż za korzyść mieć będziesz, choćbyś cały świat zyskał,
          gdy na duszy szkodę poniesiesz?
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
