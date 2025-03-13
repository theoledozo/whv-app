import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = ({ 
  type, 
  title, 
  location, 
  description, 
  isValidWHV, 
  jobType, 
  image, 
  date, 
  id 
}) => {
  const detailLink = type === 'farm' ? `/farm/${id}` : `/listing/${id}`;
  
  return (
    <div className="card">
      {image && (
        <div className="card-image" style={{ backgroundColor: image }}></div>
      )}
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-subtitle">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
          {isValidWHV && (
            <span className="badge badge-success" style={{ marginLeft: '10px' }}>
              Valide WHV
            </span>
          )}
        </div>
        {description && (
          <div className="card-text">
            <p>{description}</p>
          </div>
        )}
      </div>
      <div className="card-footer">
        <span>
          {type === 'farm' ? (
            <>
              {jobType === 'cueillette' && <FontAwesomeIcon icon={faMapMarkerAlt} />}
              {' '}{jobType}
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {date}
            </>
          )}
        </span>
        <Link to={detailLink} className="btn btn-outline">
          Voir détails
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['farm', 'listing']).isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string,
  isValidWHV: PropTypes.bool,
  jobType: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

Card.defaultProps = {
  isValidWHV: false,
  description: '',
  image: null,
  jobType: '',
  date: ''
};

export default Card;
