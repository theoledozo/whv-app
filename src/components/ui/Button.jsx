import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ 
  children, 
  variant, 
  onClick, 
  fullWidth, 
  icon, 
  type 
}) => {
  const buttonClass = `btn ${variant ? `btn-${variant}` : ''}`;
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      type={type}
      style={fullWidth ? { width: '100%' } : {}}
    >
      {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: '8px' }} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  icon: PropTypes.object,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
  fullWidth: false,
  icon: null,
  type: 'button'
};

export default Button;
