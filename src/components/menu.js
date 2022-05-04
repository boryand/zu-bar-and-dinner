import food1 from "../media/food1.png";
import food2 from "../media/food2.png";
import food3 from "../media/food3.png";
import food4 from "../media/food4.png";
import food5 from "../media/food5.png";
import food6 from "../media/food6.png";

const Menu = () => {
  return (
    <div className="lunch_container">
      <div className="lunch_menu">
        <h3>MittagsMenü von 11:30 - 15:00 Uhr</h3>
        <p className="lunch_items"> 1.Suppe 🍲</p>
        <p className="lunch_items"> 2.Hauptgericht 🍗</p>
        <p className="lunch_items"> 3.Dessert 🧁</p>
        <p>nach Wahl 10 €</p>
      </div>

      <div className="main_menu">
        <div className="items">
          <p>Bratkartoffeln </p>
          <p> Bratkartoffeln mit käse</p>
          <p>Hänchenstücke Meze </p>
          <p>Hänchenflügel Meze</p>
          <p>Hänchenleber mit Zwibel</p>
          <p>Hänchenherzen mit Pilze</p>
          <p>Hühner/Schweinesteak</p>
          <p>Frikadellen/Kebap</p>
          <p>Hänchenspeiß</p>
          <p>Schweinespeiß</p>
          <p>Schweinefl. mit Kohl</p>
          <p>Hänchen. mit Kohl</p>
          <p>Kalbfleisch mit Erbsen</p>
        </div>

        <div className="items_price">
          <p>4.00€</p>
          <p> 5.00€</p>
          <p>6.00€ </p>
          <p>6.00€ </p>
          <p>6.00€ </p>
          <p>6.00€ </p>
          <p>5.00€</p>
          <p> 1.50€</p>
          <p>4.00€</p>
          <p> 4.00€</p>
          <p> 5.50€</p>
          <p>5.50€</p>
          <p> 6.00€</p>
        </div>

        <div className="food_images">
          <img className="food_images_items" src={food1} alt="" />
          <img className="food_images_items" src={food2} alt="" />
          <img className="food_images_items" src={food3} alt="" />
        </div>
      </div>

      <div className="cooked_food">


      <div className="cooked_food_images">
          <img className="cooked_images_items" src={food1} alt="" />
          <img className="cooked_images_items" src={food2} alt="" />
          <img className="cooked_images_items" src={food3} alt="" />
        </div>


        <div className="cooked_food_items">
          <p> Hähnchenbällchen suppe</p>
          <p>Linsensuppe </p>
          <p>Tarator </p>
          <p>Shkembesupper/Kuttelsuppe </p>
          <p>Bohneneintopf</p>
          <p>Mussakka</p>
          <p> Drobsarma</p>
          <p>Hühnchen mit Kartoffel</p>
        </div>

        <div className="cooked_food_items_price">
          <p> 4.50 €</p>
          <p>4.00 € </p>
          <p>4.00 € </p>
          <p>5.00€ </p>
          <p>4.50€</p>
          <p>5.50€</p>
          <p> 5.50€</p>
          <p>5.00€</p>
        </div>

       

      </div>
    </div>
  );
};

export default Menu;
