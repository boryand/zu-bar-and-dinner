const Menu = () => {
  return (
    <div className="menu">
      <h1 className="choose_one">Wählen Sie aus, welche Sie sehen möchten:</h1>

      <div className="food_link">
        {" "}
        <a href="/food">
          <h3>Gekochte Gerichte & Getränke</h3>{" "}
        </a>
      </div>
     
      <div className="kitchen_look">
      <a href="/our_kitchen">
          <h3>Direkt aus der Küche</h3>{" "}
        </a>
      </div>
    </div>
  );
};
export default Menu;
