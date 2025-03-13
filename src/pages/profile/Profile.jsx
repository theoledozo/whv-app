import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faStar, faList, faEdit } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/layout/Header';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('listings');
  
  // Dans une vraie application, nous récupérerions ces données depuis une API
  const user = {
    name: 'Thomas Dupont',
    email: 'thomas.dupont@example.com',
    since: 'Janvier 2025',
    type: 'backpacker'
  };
  
  const userListings = [
    {
      id: 1,
      title: 'Recherche travail en ferme laitière',
      location: 'Victoria, AUS',
      description: 'Backpacker français avec expérience en ferme laitière cherche emploi pour valider ses 88 jours.',
      date: 'Il y a 1 semaine'
    }
  ];
  
  const favoriteListings = [
    {
      id: 2,
      type: 'farm',
      title: 'Ferme des Kangourous',
      location: 'Byron Bay, NSW',
      description: 'Cueillette de fruits et légumes, logement inclus sur place.',
      isValidWHV: true,
      jobType: 'Cueillette',
      image: '#8BC34A'
    },
    {
      id: 3,
      type: 'listing',
      title: 'Vendanges à Margaret River',
      location: 'Margaret River, WA',
      description: 'Recherche 5 personnes pour vendanges. Expérience non requise. Début dans 2 semaines.',
      isValidWHV: true,
      date: 'Il y a 1 semaine'
    }
  ];
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handleLogout = () => {
    // Dans une vraie application, nous déconnecterions l'utilisateur ici
    console.log('Déconnexion');
  };
  
  return (
    <div className="container">
      <Header title="Profil" />
      
      <main>
        <div className="profile-header">
          <div className="profile-avatar">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>
          <p>Membre depuis {user.since}</p>
          <p>Type de compte: {user.type === 'backpacker' ? 'Backpacker' : 'Ferme'}</p>
        </div>
        
        <div className="auth-tabs" style={{ marginBottom: '20px' }}>
          <div 
            className={`auth-tab ${activeTab === 'listings' ? 'active' : ''}`}
            onClick={() => handleTabChange('listings')}
          >
            <FontAwesomeIcon icon={faList} style={{ marginRight: '5px' }} />
            Mes annonces
          </div>
          <div 
            className={`auth-tab ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => handleTabChange('favorites')}
          >
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '5px' }} />
            Favoris
          </div>
        </div>
        
        {activeTab === 'listings' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3>Mes annonces publiées</h3>
              <Button 
                variant="outline" 
                icon={faEdit}
                onClick={() => console.log('Créer une nouvelle annonce')}
              >
                Nouvelle
              </Button>
            </div>
            
            {userListings.length > 0 ? (
              userListings.map(listing => (
                <Card 
                  key={listing.id}
                  type="listing"
                  title={listing.title}
                  location={listing.location}
                  description={listing.description}
                  date={listing.date}
                  id={listing.id}
                />
              ))
            ) : (
              <p>Vous n'avez pas encore publié d'annonces.</p>
            )}
          </div>
        )}
        
        {activeTab === 'favorites' && (
          <div>
            <h3 style={{ marginBottom: '15px' }}>Mes favoris</h3>
            
            {favoriteListings.length > 0 ? (
              favoriteListings.map(item => (
                <Card 
                  key={item.id}
                  type={item.type}
                  title={item.title}
                  location={item.location}
                  description={item.description}
                  isValidWHV={item.isValidWHV}
                  jobType={item.jobType}
                  image={item.image}
                  date={item.date}
                  id={item.id}
                />
              ))
            ) : (
              <p>Vous n'avez pas encore ajouté de favoris.</p>
            )}
          </div>
        )}
        
        <div style={{ margin: '30px 0' }}>
          <Button 
            variant="outline" 
            fullWidth 
            icon={faSignOutAlt}
            onClick={handleLogout}
          >
            Déconnexion
          </Button>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
