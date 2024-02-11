// NotFound.jsx

import { Link } from "react-router-dom";
import "./NotFound.scss";
function NotFoundPage() {
  return (
    <div className="not-found">
      <div id="not-found-logo">
        <h1>404</h1>
      </div>
      <p className="line">
        Oups! La page quevous demandez n'existe pas.
      </p>
      <p className="br">
        Oups! La page que <br/>
        vous demandez n'existe pas.
      </p>

      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFoundPage;
