// footer.jsx
import { Link } from "react-router-dom";
import KasaLogoW from "/KasaW.svg";
import "./footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer_container">
        <div className="footer">
          <div id="footer-logo">
            <Link to="/">
              <img src={KasaLogoW} alt="Kasa Wite logo" />
            </Link>
          </div>
          <div id="footer-text">
            <p>© 2020 Kasa. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
