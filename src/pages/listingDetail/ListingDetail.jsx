import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faPhone, faEnvelope, faArrowLeft, faClock } from '@fortawesome/free-solid-svg-icons';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import MapContainer from '../../components/map/MapContainer';

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dans une vraie application, nous récupérerions les données de l'annonce depuis une API
  const listing = {
    id: 1,
    title: 'Recherche 2 backpackers pour récolte',
    location: 'Bundaberg, QLD',
    description: 'Nous recherchons 2 backpackers pour la récolte de fraises à Bundaberg. Début immédiat, contrat de 3 mois. Expérience non requise mais bonne condition physique nécessaire.',
    additionalInfo: 'Horaires: 6h-14h, 5 jours par semaine. Salaire horaire de 25$. Logement non fourni mais nous pouvons vous orienter vers des auberges à proximité (environ 150$/semaine).',
    isValidWHV: true,
    jobType: 'Cueillette',
    image: '#FFA000',
    address: '45 Strawberry Road, Bundaberg, QLD 4670',
    date: 'Il y a 2 jours',
    contact: {
      name: 'Sarah Johnson',
      phone: '+61 4XX XXX XXX',
      email: 'jobs@bundaberryfruits.com'
    },
    details: {
      workType: 'Récolte de fraises',
      accommodation: 'Non inclus',
      salary: '25$/h',
      duration: '3 mois'
    },
    publisher: {
      name: 'Sarah J.',
      since: 'Membre depuis janvier 2025'
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleContact = () => {
    // Dans une vraie application, nous ouvririons un formulaire de contact ou un chat
    console.log('Contacter l\'annonceur');
  };

  return (
    <div className="container">
      <main>
        <div className="detail-header">
          <div className="detail-image" style={{ backgroundColor: listing.image }}></div>
          <a href="#" className="detail-back" onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
        
        <div style={{ padding: '0 15px' }}>
          <h1 className="detail-title">{listing.title}</h1>
          <p className="detail-subtitle">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {listing.location}
          </p>
          
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                {listing.isValidWHV && <Badge text="Valide WHV" variant="success" />}
                <Badge 
                  text={listing.jobType} 
                  style={{ backgroundColor: listing.image, color: 'white' }} 
                />
              </div>
              
              <div className="detail-info">
                {Object.entries(listing.details).map(([key, value]) => (
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
            <p>{listing.description}</p>
            <p style={{ marginTop: '10px' }}>{listing.additionalInfo}</p>
          </div>
          
          <div className="detail-section">
            <h2 className="detail-section-title">Localisation</h2>
            <MapContainer height={200} />
            <p style={{ marginTop: '10px' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {listing.address}
            </p>
          </div>
          
          <div className="detail-section">
            <h2 className="detail-section-title">Contact</h2>
            <p><FontAwesomeIcon icon={faUser} /> {listing.contact.name}</p>
            <p><FontAwesomeIcon icon={faPhone} /> {listing.contact.phone}</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> {listing.contact.email}</p>
          </div>
          
          <div className="detail-section">
            <h2 className="detail-section-title">Publié par</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '25px', 
                backgroundColor: '#DDD', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginRight: '15px' 
              }}>
                <FontAwesomeIcon icon={faUser} style={{ fontSize: '24px', color: '#999' }} />
              </div>
              <div>
                <p style={{ fontWeight: 'bold' }}>{listing.publisher.name}</p>
                <p style={{ fontSize: '14px', color: '#666' }}>{listing.publisher.since}</p>
              </div>
            </div>
          </div>
          
          <div style={{ margin: '30px 0' }}>
            <Button variant="primary" fullWidth onClick={handleContact}>
              Contacter l'annonceur
            </Button>
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default ListingDetail;
