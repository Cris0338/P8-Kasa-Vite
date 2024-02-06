import KasaLogoR from "/KasaR.svg";

function Header() {
  return (
    <>
      {/* <!-- Nav Header --> */}
      <header className="navbar">
        <div className="logo">
        <a href="index.html">
          <img src={KasaLogoR} alt="Kasa Wite logo" />
        </a>
        </div>
        <div className="menu">
          <div className="accueil">
            <a href="index.html" className="nav-link">
              Accueil
            </a>
          </div>
          <div className="propos">
            <a href="#activities" className="nav-link">
              À Propos
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
