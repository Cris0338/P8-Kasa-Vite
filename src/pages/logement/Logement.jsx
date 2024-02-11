// Logement.jsx

// Importa le dipendenze necessarie
import Carousel from "../../pages/modules/carousel/carousel";
import Accordion from "../../pages/modules/accordion/accordion";
import RedBox from "../../pages/modules/redbox/redbox";
import Rating from "../../pages/modules/rating/rating";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./Logement.scss";

function Logement() {
  // Ottieni l'ID dall'URL
  const { id } = useParams();

  // Stato per memorizzare i dettagli dell'alloggio
  const [logement, setLogement] = useState(null);

  // Effettua la ricerca dell'alloggio corrispondente all'ID
  useEffect(() => {
    const found = data.find((item) => item.id === id);
    setLogement(found);
  }, [id]);

  // Controlla se l'alloggio è stato trovato
  if (!logement) {
    return <div className="pasdelogement">Pas de logement trové !</div>;
  }

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />
      <div className="logement-firstLine">
        <div className="logement-titleBlock">
          <h1 id="logement-title">{logement.title}</h1>
          <h2 id="logement-location">{logement.location}</h2>
        </div>
        <div className="logement-hostBlock">
          <div id="host-name">
            {logement.host.name.split(" ").map((part, index) => (
              <React.Fragment key={index}>
                {part}
                <br />
              </React.Fragment>
            ))}
          </div>
          <img
            id="host-picture"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
      </div>

      <div className="logement-secondLine">
        <div className="logement-tagBlock">
          {logement.tags.map((tag, index) => (
            <RedBox key={index} text={tag} />
          ))}
        </div>
        <div className="logement-ratingBlock">
          <Rating rating={parseFloat(logement.rating)} />
        </div>
      </div>
      <div className="logement-thirdLine">
        <Accordion title="Description" content={logement.description} />
        <Accordion
          title="Équipements"
          content={logement.equipments.map((equipment, index) => (
            <React.Fragment key={index}>
              {equipment} <br />
            </React.Fragment>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
