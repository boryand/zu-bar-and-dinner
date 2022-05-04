const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
      <li>
          <a className="navvlink" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="navvlink" href="/menu">
            Menü
          </a>
        </li>
        <li>
          <a className="navvlink" href="/kontakt">
            Kontakt
          </a>
        </li>
        <li>
          <a className="navvlink" href="/uberuns">
            ÜberUns
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
