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
      <img
        className="logo"
        src={
          "https://www.falstaff.de/fileadmin/_processed_/b/6/csm_Restaurant-der-Woche-Deutschland-c-Shutterstock-2640_f7812a7162.jpg"
        }
      />

      <img
        className="zu"
        src={
          "https://www.falstaff.de/fileadmin/_processed_/b/6/csm_Restaurant-der-Woche-Deutschland-c-Shutterstock-2640_f7812a7162.jpg"
        }
        alt=""
      />

      <img className="zu" src={z2} alt="" />

      <img className="zu" src={z3} alt="" />

      <img className="zu" src={z4} alt="" />

      <img className="zu" src={z5} alt="" />

      <img className="zu" src={z6} alt="" />

      <img className="zu" src={z7} alt="" />

      <img className="zu" src={z8} alt="" />

      <img className="zu" src={z1} alt="" />
    </div>
  );
};

export default Landing;
