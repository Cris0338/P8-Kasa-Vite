import { Link, NavLink } from "react-router-dom";
import KasaLogoR from "/KasaR.svg";
import "./header.scss";

function Header() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={KasaLogoR} alt="Kasa Wite logo" />
          </Link>
        </div>
        <div className="menu">
          <div className="accueil">
            <NavLink to="/" className="nav-link">
              Accueil
            </NavLink>
          </div>
          <div className="propos">
            <NavLink to="/about" className="nav-link">
              À Propos
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
