// card.jsx

import "./card.scss";

import { Link } from "react-router-dom";
function Card({ title, cover, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt="Preview" />
      <h2 className="card_text">{title}</h2>
    </Link>
  );
}

export default Card;
