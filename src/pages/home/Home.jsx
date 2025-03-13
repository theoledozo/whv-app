import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faAppleAlt, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/layout/Header';
import BottomNavigation from '../../components/layout/BottomNavigation';
import MapContainer from '../../components/map/MapContainer';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
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

  const farms = [
    {
      id: 1,
      title: 'Ferme des Kangourous',
      location: 'Byron Bay, NSW',
      description: 'Cueillette de fruits et légumes, logement inclus sur place.',
      isValidWHV: true,
      jobType: 'Cueillette',
      image: '#8BC34A'
    },
    {
      id: 2,
      title: 'Vignoble Sunshine',
      location: 'Margaret River, WA',
      description: 'Travail dans les vignes et la cave à vin. Expérience en viticulture appréciée.',
      isValidWHV: true,
      jobType: 'Viticulture',
      image: '#FFA000'
    }
  ];

  const listings = [
    {
      id: 1,
      title: 'Recherche 2 backpackers pour récolte',
      location: 'Bundaberg, QLD',
      description: 'Recherche 2 personnes pour récolte de fraises. Début immédiat, 3 mois de travail.',
      isValidWHV: true,
      date: 'Il y a 2 jours'
    }
  ];

  return (
    <div className="container">
      <Header title="WHV Farm Finder" />
      
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
        
        <MapContainer />
        
        <h2>Fermes à proximité</h2>
        {farms.map(farm => (
          <Card 
            key={farm.id}
            type="farm"
            title={farm.title}
            location={farm.location}
            description={farm.description}
            isValidWHV={farm.isValidWHV}
            jobType={farm.jobType}
            image={farm.image}
            id={farm.id}
          />
        ))}
        
        <h2>Annonces récentes</h2>
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

export default Home;
