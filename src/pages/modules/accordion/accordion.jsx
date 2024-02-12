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
      {/* element qui contient les elements declencheur et declancee */}
      <div className={`accordion-item ${isActive ? "action" : ""}`}>
        <div className="accordion-title-bar">
          <h2>{title}</h2>
          {/* element sur le quel si on clique on aura une action */}
          <div className="accordion-icon" onClick={handleClick}> 
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
        {/* element qui contient le contenu */}
        <div className={`accordion-content ${isActive ? "action" : ""}`}>{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
