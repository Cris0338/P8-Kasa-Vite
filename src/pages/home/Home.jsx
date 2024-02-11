// Home.jsx

import React from 'react';
import Gallery from "../modules/gallery/gallery";
import Banner from "../modules/banner/banner";
import bannerImage from '/IMGbanner.png';
import './Home.scss';

function Home() {
  return (
    <>
      <Banner image={bannerImage}>
        <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
        <h1 className="banner_text br">Chez vous, <br/>partout et ailleurs</h1>
      </Banner>
      <Gallery />
    </>
  );
}

export default Home;

