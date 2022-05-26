import map from "../media/map.png";
import vid1 from "../media/vid1.mp4";

const About_us = () => {
  return (
    <div className="about_us">
      <h1 className="mess1">Wo Sie uns finden:</h1>
      <h4> 📍 Carl-Theodor-Str18 , 67227 Frankenthal</h4>
      <div className="about_us_content">
        <img
          className="map"
          src={
            "https://res.cloudinary.com/bobchi/image/upload/v1653561902/map_siwjnv.png"
          }
          alt=""
        />
        <video width="600" height="500" className="vid" controls>
          <source
            src={
              "https://res.cloudinary.com/bobchi/video/upload/v1653562641/vid1_l0lmvn.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default About_us;
