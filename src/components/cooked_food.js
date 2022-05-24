import m1 from "../media/m1.png";
import m2 from "../media/m2.png";
import m3 from "../media/m3.png";
import m4 from "../media/m4.png";
import m5 from "../media/m5.png";
import m6 from "../media/m6.png";
import m7 from "../media/m7.png";
import m8 from "../media/m8.png";
import m9 from "../media/m9.png";

const Cooked_food = () => {
  return (
    <div className="lunch_container">
      <div className="lunch_div">
        <img alt="" className="lunch_img" src={m1} />
        <img alt="" className="lunch_img" src={m2} />
      </div>
      <div className="lunch_div">
        <img alt="" className="lunch_img" src={m3} />
        <img alt="" className="lunch_img" src={m4} />
      </div>
      <div className="lunch_div">
        <img alt="" className="lunch_img" src={m5} />
        <img alt="" className="lunch_img" src={m6} />
      </div>
      <div className="lunch_div">
        {" "}
        <img alt="" className="lunch_img" src={m7} />
        <img alt="" className="lunch_img" src={m8} />
      </div>
      <div className="lunch_div">
        <img alt="" className="lunch_img" src={m9} />
      </div>
    </div>
  );
};

export default Cooked_food;
