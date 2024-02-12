// accordion.jsx

import "./accordion.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";


function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-container">
      <div className={`accordion-item ${isActive ? "action" : ""}`}>
        <div className="accordion-title" onClick={handleClick}>
          <h2>{title}</h2>
          <div className="accordion-icon">
            <FontAwesomeIcon icon={faAngleUp} />
            {/* <img src={arrow} alt="Toggle" /> */}
          </div>
        </div>
        <div className={`accordion-content ${isActive ? "action" : ""}`}>{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
