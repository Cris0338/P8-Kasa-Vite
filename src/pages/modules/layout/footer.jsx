// footer.jsx

import KasaLogo from "/KasaW.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div id="footer-logo">
          <a href="index.html">
            <img src={KasaLogo} alt="Kasa Wite logo" />
          </a>
        </div>
        <div id="footer-text">
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
