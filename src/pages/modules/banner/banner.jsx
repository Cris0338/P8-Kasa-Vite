// banner.jsx

import "./banner.scss";

function Banner({ image, children }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
}

export default Banner;
