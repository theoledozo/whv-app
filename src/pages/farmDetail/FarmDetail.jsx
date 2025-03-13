import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faPhone, faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import MapContainer from '../../components/map/MapContainer';

const FarmDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dans une vraie application, nous récupérerions les données de la ferme depuis une API
  const farm = {
    id: 1,
    title: 'Ferme des Kangourous',
    location: 'Byron Bay, NSW',
    description: 'La Ferme des Kangourous est située à 15 minutes de Byron Bay. Nous cultivons principalement des avocats, mangues et fruits de la passion. Nous recherchons des backpackers pour la saison de récolte qui commence en avril.',
    additionalInfo: 'Le logement est fourni sur place (chambre partagée) avec cuisine commune et wifi. Le travail est payé à la pièce, avec possibilité de gagner entre 20 et 30$ de l\'heure pour les travailleurs rapides.',
    isValidWHV: true,
    jobType: 'Cueillette',
    image: '#8BC34A',
    address: '123 Pacific Highway, Byron Bay, NSW 2481',
    contact: {
      name: 'John Smith',
      phone: '+61 4XX XXX XXX',
      email: 'contact@fermedeskangourous.com'
    },
    details: {
      workType: 'Cueillette de fruits',
      accommodation: 'Inclus',
      salary: 'À la pièce',
      duration: '3+ mois'
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleContact = () => {
    // Dans une vraie application, nous ouvririons un formulaire de contact ou un chat
    console.log('Contacter la ferme');
  };

  return (
    <div className="container">
      <main>
        <div className="detail-header">
          <div className="detail-image" style={{ backgroundColor: farm.image }}></div>
          <a href="#" className="detail-back" onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
        
        <div style={{ padding: '0 15px' }}>
          <h1 className="detail-title">{farm.title}</h1>
          <p className="detail-subtitle">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {farm.location}
          </p>
          
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                {farm.isValidWHV && <Badge text="Valide WHV" variant="success" />}
                <Badge 
                  text={farm.jobType} 
                  style={{ backgroundColor: farm.image, color: 'white' }} 
                />
              </div>
              
              <div className="detail-info">
                {Object.entries(farm.details).map(([key, value]) => (
                  <div key={key} className="detail-info-item">
                    <div className="detail-info-label">
                      {key === 'workType' && 'Type de travail'}
                      {key === 'accommodation' && 'Logement'}
                      {key === 'salary' && 'Salaire'}
                      {key === 'duration' && 'Durée'}
                    </div>
                    <div className="detail-info-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="detail-section">
            <h2 className="detail-section-title">Description</h2>
            <p>{farm.description}</p>
            <p style={{ marginTop: '10px' }}>{farm.additionalInfo}</p>
          </div>
          
          <div className="detail-section">
            <h2 className="detail-section-title">Localisation</h2>
            <MapContainer height={200} />
            <p style={{ marginTop: '10px' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {farm.address}
            </p>
          </div>
          
          <div className="detail-section">
            <h2 className="detail-section-title">Contact</h2>
            <p><FontAwesomeIcon icon={faUser} /> {farm.contact.name}</p>
            <p><FontAwesomeIcon icon={faPhone} /> {farm.contact.phone}</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> {farm.contact.email}</p>
          </div>
          
          <div style={{ margin: '30px 0' }}>
            <Button variant="primary" fullWidth onClick={handleContact}>
              Contacter la ferme
            </Button>
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default FarmDetail;
