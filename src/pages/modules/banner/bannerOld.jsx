// banner.jsx

import "./banner.scss";
import bannerImage from '/IMGbanner.png';

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner Background" className="banner-image"/>
      <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
      <h1 className="banner_text br">Chez vous, <br/>partout et ailleurs</h1>
    </div>
  );
}

export default Banner;

