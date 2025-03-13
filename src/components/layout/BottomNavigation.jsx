import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;

  // Ne pas afficher la navigation sur la page splash et login
  if (path === '/' || path === '/login') {
    return null;
  }

  return (
    <nav>
      <Link to="/home" className={`nav-item ${path === '/home' ? 'active' : ''}`}>
        <FontAwesomeIcon icon={faHome} />
        <span>Accueil</span>
      </Link>
      <Link to="/listings" className={`nav-item ${path === '/listings' ? 'active' : ''}`}>
        <FontAwesomeIcon icon={faList} />
        <span>Annonces</span>
      </Link>
      <Link to="/create-listing" className={`nav-item ${path === '/create-listing' ? 'active' : ''}`}>
        <FontAwesomeIcon icon={faPlusCircle} />
        <span>Publier</span>
      </Link>
      <Link to="/profile" className={`nav-item ${path === '/profile' ? 'active' : ''}`}>
        <FontAwesomeIcon icon={faUser} />
        <span>Profil</span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
