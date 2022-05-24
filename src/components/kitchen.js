import food10 from "../media/food10.png";
import food11 from "../media/food11.png";

import food12 from "../media/food12.png";

import food13 from "../media/food13.png";

const Kitchen = () => {
  return (
    <div className="kitchen_container">
  
      <div className="kitchen_images">
        <img className="kitchen_images_items" src={food10} alt="" />
        <img className="kitchen_images_items" src={food11} alt="" />
        <img className="kitchen_images_items" src={food12} alt="" />
       
      </div>
      <div className="kitchen_images2">
      <img className="kitchen_images_items" src={food13} alt="" />
      </div>
    </div>
  );
};

export default Kitchen;
