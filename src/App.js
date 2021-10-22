import react from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { Route, Switch } from "react-router";
import BookNow from "./pages/BookNow";
import LearnMore from "./pages/LearnMore";
import LocationsPage from "./pages/LocationsPage";
import Zwiastowanie from "./pages/Zwiastowanie";
import Nawiedzenie from "./pages/Nawiedzenie";
import Narodzenie from "./pages/Narodzenie";
import Ofiarowanie from "./pages/Ofiarowanie";
import Znalezienie from "./pages/Znalezienie";
import Chrzest from "./pages/Chrzest";
import Cud from "./pages/Cud";
import Nauczanie from "./pages/Nauczanie";
import Przemienienie from "./pages/Przemienienie";
import Ustanowienie from "./pages/Ustanowienie";
import Modlitwa from "./pages/Modlitwa";
import Biczowanie from "./pages/Biczowanie";
import Cierniem from "./pages/Cierniem";
import Droga from "./pages/Droga";
import Ukrzyżowanie from "./pages/Ukrzyżowanie";
import Zmartwychwstanie from "./pages/Zmartwychwstanie";
import Wniebowstąpienie from "./pages/Wniebowstąpienie";
import Wniebowzięcie from "./pages/Wniebowzięcie";
import Ukoronowanie from "./pages/Ukoronowanie";
import Moc from "./pages/Moc";
import Zesłanie from "./pages/Zesłanie";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/różaniec">
          <LocationsPage />
        </Route>
        <Route path="/odmawianie">
          <BookNow />
        </Route>
        <Route path="/zwiastowanie">
          <Zwiastowanie />
        </Route>
        <Route path="/nawiedzenie">
          <Nawiedzenie />
        </Route>
        <Route path="/narodzenie">
          <Narodzenie />
        </Route>
        <Route path="/ofiarowanie">
          <Ofiarowanie />
        </Route>
        <Route path="/znalezienie">
          <Znalezienie />
        </Route>
        <Route path="/chrzest">
          <Chrzest />
        </Route>
        <Route path="/cud">
          <Cud />
        </Route>
        <Route path="/nauczanie">
          <Nauczanie />
        </Route>
        <Route path="/przemienienie">
          <Przemienienie />
        </Route>
        <Route path="/ustanowienie">
          <Ustanowienie />
        </Route>
        <Route path="/modlitwa">
          <Modlitwa />
        </Route>
        <Route path="/biczowanie">
          <Biczowanie />
        </Route>
        <Route path="/cierniem">
          <Cierniem />
        </Route>
        <Route path="/droga">
          <Droga />
        </Route>
        <Route path="/ukrzyżowanie">
          <Ukrzyżowanie />
        </Route>
        <Route path="/zmartwychwstanie">
          <Zmartwychwstanie />
        </Route>
        <Route path="/wniebowstąpienie">
          <Wniebowstąpienie />
        </Route>
        <Route path="/wniebowzięcie">
          <Wniebowzięcie />
        </Route>
        <Route path="/zesłanie">
          <Zesłanie />
        </Route>
        <Route path="/ukoronowanie">
          <Ukoronowanie />
        </Route>
        <Route path="/maryja">
          <LearnMore />
        </Route>
        <Route path="/moc">
          <Moc />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/czytaj">
          <Privacy />
        </Route>
      </Switch>
      <Footer />
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "14px",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        “W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies. Więcej  szczegółów w naszej
        <Link
          to="/czytaj"
          // target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgb(204, 204, 204)",
            textDecoration: "none",
          }}
        >
          &nbsp;„Polityce Cookies”/”Polityce Prywatności”.
        </Link>
      </CookieConsent>
    </>
  );
}

export default App;
