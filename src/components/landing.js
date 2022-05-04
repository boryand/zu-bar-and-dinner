import logo from "../media/logo.gif";
import Slide from "react-reveal/Slide";
import z1 from "../media/z1.jpeg";
import z2 from "../media/z2.jpeg";
import z3 from "../media/z3.jpeg";
import z4 from "../media/z4.jpeg";
import z5 from "../media/z5.jpeg";
import z6 from "../media/z6.jpeg";
import z7 from "../media/z7.jpeg";
import z8 from "../media/z8.jpeg";

import z10 from "../media/z10.jpeg";

const Landing = () => {
  return (
    <div className="landing_container">
      <img className="logo" src={logo} />
      <h1 className="message">
        Genießen Sie den Luxus, Sie haben es sich verdient !
      </h1>

      <Slide left>
        <img className="zu" src={z10} alt="" />
      </Slide>
      <Slide right>
        <img className="zu" src={z2} alt="" />
      </Slide>
      <Slide left>
        <img className="zu" src={z3} alt="" />
      </Slide>
      <Slide right>
        <img className="zu" src={z4} alt="" />
      </Slide>
      <Slide left>
        <img className="zu" src={z5} alt="" />
      </Slide>
      <Slide right>
        <img className="zu" src={z6} alt="" />
      </Slide>
      <Slide left>
        <img className="zu" src={z7} alt="" />
      </Slide>
      <Slide right>
        <img className="zu" src={z8} alt="" />
      </Slide>
      <Slide left>
        <img className="zu" src={z1} alt="" />
      </Slide>
    </div>
  );
};

export default Landing;
