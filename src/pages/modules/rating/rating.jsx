// rating.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar, faStarHalfAlt, faStar as farFaStar } from '@fortawesome/free-solid-svg-icons';
import './rating.scss';

function Rating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = hasHalfStar ? 5 - fullStars - 1 : 5 - fullStars;
  
    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={`full-${i}`} icon={fasFaStar} className="star full" />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star half" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon key={`empty-${i}`} icon={farFaStar} className="star empty" />
        ))}
      </div>
    );
}

export default Rating;
