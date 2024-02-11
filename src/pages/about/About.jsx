// About.jsx

import React from "react";
import Accordion from "../modules/accordion/accordion";
import Banner from "../modules/banner/banner"; // Assicurati di importare Banner
import "./About.scss";
import data from "../../data/about.json";
import bannerAboutImage from "/IMGbannerAbout.jpeg"; // Assicurati che il percorso sia corretto

function About() {
  return (
    <div className="about">
      <div className="about_container">
        <Banner image={bannerAboutImage} />
        {data.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;

