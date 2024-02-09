import "./accordion.scss";
import React, { useState } from "react";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-container">
      <div className={`accordion-item ${isActive ? "active" : ""}`}>
        <div
          className="accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <h2>{title}</h2>
          <div className="accordion-icon">{isActive ? "-" : "+"}</div>
        </div>
        <div className={`accordion-content ${isActive ? "active" : ""}`}>{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
