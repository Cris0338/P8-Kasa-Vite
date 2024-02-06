// footer.jsx

import KasaLogoW from "/KasaW.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div id="footer-logo">
            <a href="index.html">
              <img src={KasaLogoW} alt="Kasa Wite logo" />
            </a>
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
