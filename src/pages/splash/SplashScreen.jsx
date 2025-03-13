import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/ui/Button';

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="splash-screen">
        <div className="splash-logo">
          <FontAwesomeIcon icon={faLeaf} />
        </div>
        <h1 className="splash-title">WHV Farm Finder</h1>
        <p className="splash-subtitle">Trouvez facilement des fermes éligibles pour vos 88 jours</p>
        <Button variant="primary" onClick={handleGetStarted}>
          Commencer
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
