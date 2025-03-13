import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/ui/Button';

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Dans une vraie application, nous ferions une authentification ici
    navigate('/home');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="auth-container">
        <div className="auth-logo">
          <h1><FontAwesomeIcon icon={faLeaf} /> WHV Farm Finder</h1>
        </div>
        
        <div className="auth-tabs">
          <div 
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabChange('login')}
          >
            Connexion
          </div>
          <div 
            className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => handleTabChange('register')}
          >
            Inscription
          </div>
        </div>
        
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              className="form-input" 
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <Button variant="primary" type="submit" fullWidth>
              {activeTab === 'login' ? 'Se connecter' : 'S\'inscrire'}
            </Button>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <p>Ou connectez-vous avec</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
              <Button variant="outline" style={{ padding: '10px 15px' }}>
                <FontAwesomeIcon icon={faGoogle} />
              </Button>
              <Button variant="outline" style={{ padding: '10px 15px' }}>
                <FontAwesomeIcon icon={faApple} />
              </Button>
            </div>
          </div>
        </form>
        
        <div className="auth-footer">
          {activeTab === 'login' ? (
            <p>Vous n'avez pas de compte ? <a href="#" onClick={() => handleTabChange('register')}>Inscrivez-vous</a></p>
          ) : (
            <p>Vous avez déjà un compte ? <a href="#" onClick={() => handleTabChange('login')}>Connectez-vous</a></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
