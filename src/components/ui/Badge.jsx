import PropTypes from 'prop-types';

const Badge = ({ 
  text, 
  variant, 
  style 
}) => {
  const badgeClass = `badge ${variant ? `badge-${variant}` : ''}`;
  
  return (
    <span className={badgeClass} style={style}>
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'warning']),
  style: PropTypes.object
};

Badge.defaultProps = {
  variant: 'success',
  style: {}
};

export default Badge;
