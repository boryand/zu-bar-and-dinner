import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.css";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Menu from "./components/menu";
import About_us from "./components/about_us";
import Cooked_food from "./components/cooked_food";
import Kitchen from "./components/kitchen";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Landing exact path="/" />
          <Contact exact path="/kontakt" />
          <Menu exact path="/menu" />
          <About_us exact path="/uberuns" />
          <Cooked_food exact path="/food" />
          <Kitchen exact path="/our_kitchen" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
