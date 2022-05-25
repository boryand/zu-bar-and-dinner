import food10 from "../media/food10.png";
import food11 from "../media/food11.png";

import food12 from "../media/food12.png";

import food13 from "../media/food13.png";
import food1 from "../media/food1.jpeg";

import food2 from "../media/food2.jpeg"
import food3 from "../media/food3.jpeg"
import food4 from "../media/food4.jpeg"
import food5 from "../media/food5.jpeg"
import food6 from "../media/food6.jpeg"
const Kitchen = () => {
  return (
    <div className="kitchen_container">
      <div className="kitchen_images">
        <img className="kitchen_images_items" src={food10} alt="" />
        <img className="kitchen_images_items" src={food11} alt="" />
        <img className="kitchen_images_items" src={food12} alt="" />
      </div>
      <div className="kitchen_images">
        <img className="kitchen_images_items" src={food13} alt="" />
        <img className="kitchen_images_items" src={food1} alt="" />
        <img className="kitchen_images_items" src={food2} alt="" />
      </div>
      <div className="kitchen_images">
        <img className="kitchen_images_items" src={food3} alt="" />
        <img className="kitchen_images_items" src={food4} alt="" />
        <img className="kitchen_images_items" src={food5} alt="" />
      </div>
      <div className="kitchen_images">
        <img className="kitchen_images_items" src={food6} alt="" />
        
      </div>
    </div>
  );
};

export default Kitchen;
