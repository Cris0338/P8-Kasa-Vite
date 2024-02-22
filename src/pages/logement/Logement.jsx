// Logement.jsx

// Importa le dipendenze necessarie
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../pages/modules/carousel/carousel";
import Accordion from "../../pages/modules/accordion/accordion";
import NotFoundPage from "../notfound/NotFound";
import RedBox from "../../pages/modules/redbox/redbox";
import Hoster from "../../pages/modules/hoster/hoster";
import Rating from "../../pages/modules/rating/rating";
import data from "../../data/data.json";
import "./Logement.scss";

function Logement() {
  // Ottieni l'ID dall'URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Stato per memorizzare i dettagli dell'alloggio
  const [logement, setLogement] = useState(null);

  // Effettua la ricerca dell'alloggio corrispondente all'ID
  useEffect(() => {
    const found = data.find((item) => item.id === id);
    if (!logement) {
      return navigate("/logement-non-trouve")
    }
    setLogement(found);
  }, [id]);


  

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />
      <div className="logement-firstBlock">
        <div className="logement-firstColumn">
          <h1 id="logement-title">{logement.title}</h1>
          <h2 id="logement-location">{logement.location}</h2>
          <div className="logement-tagBlock">
            {logement.tags.map((tag, index) => (
              <RedBox key={index} text={tag} />
            ))}
          </div>
        </div>

        <div className="logement-secondColumn">
          <div className="logement-hostBlock">
          <Hoster name={logement.host.name} picture={logement.host.picture} />
          </div>
          <div className="logement-ratingBlock">
            <Rating rating={parseFloat(logement.rating)} />
          </div>
        </div>
      </div>
      <div className="logement-secondBlock">
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
