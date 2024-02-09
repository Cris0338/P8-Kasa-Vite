// About.jsx
import Accordion from "./modules/accordion/accordion";
import "./About.scss";
import data from "../data/about.json";

function About() {
  return (
    <>
      <div className="about">
        <div className="about_container">
        <div className="banner"></div>
        <div className="about_accordions"></div>
        {data.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
      </div>
    </>
  );
}

export default About;

