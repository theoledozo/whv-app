import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/layout/Header';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Listings = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Dans une vraie application, nous ferions une recherche ici
    console.log('Recherche:', searchQuery);
  };

  const filters = [
    { id: 'all', name: 'Tous' },
    { id: 'cueillette', name: 'Cueillette' },
    { id: 'elevage', name: 'Élevage' },
    { id: 'maraichage', name: 'Maraîchage' },
    { id: 'viticulture', name: 'Viticulture' },
    { id: 'logement', name: 'Avec logement' },
    { id: 'whv', name: 'Valide WHV' }
  ];

  const listings = [
    {
      id: 1,
      title: 'Recherche 2 backpackers pour récolte',
      location: 'Bundaberg, QLD',
      description: 'Recherche 2 personnes pour récolte de fraises. Début immédiat, 3 mois de travail.',
      isValidWHV: true,
      date: 'Il y a 2 jours'
    },
    {
      id: 2,
      title: 'Travail en ferme laitière',
      location: 'Shepparton, VIC',
      description: 'Ferme laitière recherche personne pour traite et soins aux animaux. Logement disponible.',
      isValidWHV: true,
      date: 'Il y a 3 jours'
    },
    {
      id: 3,
      title: 'Vendanges à Margaret River',
      location: 'Margaret River, WA',
      description: 'Recherche 5 personnes pour vendanges. Expérience non requise. Début dans 2 semaines.',
      isValidWHV: true,
      date: 'Il y a 1 semaine'
    },
    {
      id: 4,
      title: 'Cueillette de mangues',
      location: 'Darwin, NT',
      description: 'Recherche cueilleurs pour saison des mangues. Travail à la pièce, bon revenu possible.',
      isValidWHV: true,
      date: 'Il y a 1 semaine'
    }
  ];

  return (
    <div className="container">
      <Header title="Annonces" />
      
      <main>
        <div className="filter-bar">
          {filters.map(filter => (
            <div 
              key={filter.id}
              className={`filter-item ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.name}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSearch} style={{ display: 'flex', marginBottom: '15px' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Rechercher une annonce..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '10px' }}
            />
          </div>
          <Button type="submit" variant="primary" style={{ padding: '10px' }}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </form>
        
        {listings.map(listing => (
          <Card 
            key={listing.id}
            type="listing"
            title={listing.title}
            location={listing.location}
            description={listing.description}
            isValidWHV={listing.isValidWHV}
            date={listing.date}
            id={listing.id}
          />
        ))}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Listings;
