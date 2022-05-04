import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.css";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Menu from "./components/menu";
import About_us from "./components/about_us";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
  
          <Landing exact path="/" />
          <Contact exact path="/kontakt" />
          <Menu exact path="/menu" />
          <About_us exact path="/uberuns" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
