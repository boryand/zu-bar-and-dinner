import map from "../media/map.png";
import vid1 from "../media/vid1.mp4"

const About_us = () => {
  return (
    <div className="about_us">
      <h1 className="mess1">Wo Sie uns finden:</h1>
      <h4> 📍 Carl-Theodor-Str18 , 67227 Frankenthal</h4>
      <div className="about_us_content">

     
      <img className="map" src={map} alt="" />
      <video width="600" height="500" className="vid" controls>
        <source src={vid1} type="video/mp4" />
      </video>


      </div>
     

    </div>
  );
};

export default About_us;
