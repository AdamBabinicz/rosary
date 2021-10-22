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
          Pan Jezus wolny jest od tej ludzkiej słabości jakkolwiek włożono Mu
          koronę z cierni, dano płaszcz purpurowy i trzcinę do ręki, aby
          wyszydzać prawdziwą królewską godność Chrystusa. Jest to przykład
          drugiej natury grzechu pychy. Dla tej samej przyczyny, co przedtem
          człowiek ubliża swojemu współbratu, wyśmiewa go i poniża.
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
          Pan Jezus przyjmuje to z pokorą, aby zadośćuczynić za naszą pychę i
          wywyższanie się nad braćmi. On jest prawdziwym Królem nieba i ziemi i
          to Jemu należy się wszelka cześć i chwała.
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
          Za przyczyną Maryi, prośmy Chrystusa o łaskę pokory i posłuszeństwa.
          Błagajmy naszą Panią, by uczyniła nasze serca tak cichymi i pokornymi,
          jak było serce Jej Syna. Uczmy się pokory przez pogodne przyjmowanie
          upokorzeń.
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
          Nie pozwól, by ominęła cię ta szansa. Tak łatwo jest być wyniosłym,
          nieczułym, kapryśnym i samolubnym, ale zostaliśmy stworzeni do
          większych rzeczy. Po co więc zniżać się do spraw, które zniszczą
          piękno naszych serc?
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
