import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/layout/Header';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Button from '../../components/ui/Button';

const CreateListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    jobType: 'cueillette',
    isValidWHV: true,
    hasAccommodation: false,
    contactPhone: '',
    contactEmail: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dans une vraie application, nous enverrions les données à une API
    console.log('Données du formulaire:', formData);
    // Redirection vers la page des annonces après soumission
    navigate('/listings');
  };

  return (
    <div className="container">
      <Header title="Créer une annonce" />
      
      <main>
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="photo-upload">
            <FontAwesomeIcon icon={faCamera} />
            <p>Ajouter une photo</p>
          </div>
          
          <div className="form-group">
            <label htmlFor="title" className="form-label">Titre de l'annonce</label>
            <input 
              type="text" 
              id="title" 
              name="title"
              className="form-input" 
              placeholder="Ex: Recherche 2 backpackers pour récolte"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="location" className="form-label">Localisation</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                id="location" 
                name="location"
                className="form-input" 
                placeholder="Ex: Bundaberg, QLD"
                value={formData.location}
                onChange={handleChange}
                required
                style={{ paddingLeft: '35px' }}
              />
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#666'
                }} 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea 
              id="description" 
              name="description"
              className="form-input" 
              placeholder="Décrivez le travail proposé, les conditions, etc."
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="jobType" className="form-label">Type de travail</label>
            <select 
              id="jobType" 
              name="jobType"
              className="form-input"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="cueillette">Cueillette</option>
              <option value="elevage">Élevage</option>
              <option value="maraichage">Maraîchage</option>
              <option value="viticulture">Viticulture</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                name="isValidWHV"
                className="checkbox-input"
                checked={formData.isValidWHV}
                onChange={handleChange}
              />
              Valide pour les 88 jours du WHV
            </label>
          </div>
          
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                name="hasAccommodation"
                className="checkbox-input"
                checked={formData.hasAccommodation}
                onChange={handleChange}
              />
              Logement inclus
            </label>
          </div>
          
          <div className="form-group">
            <label htmlFor="contactPhone" className="form-label">Téléphone de contact</label>
            <input 
              type="tel" 
              id="contactPhone" 
              name="contactPhone"
              className="form-input" 
              placeholder="Ex: +61 4XX XXX XXX"
              value={formData.contactPhone}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contactEmail" className="form-label">Email de contact</label>
            <input 
              type="email" 
              id="contactEmail" 
              name="contactEmail"
              className="form-input" 
              placeholder="Ex: contact@example.com"
              value={formData.contactEmail}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <Button variant="primary" type="submit" fullWidth>
              Publier l'annonce
            </Button>
          </div>
        </form>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default CreateListing;
