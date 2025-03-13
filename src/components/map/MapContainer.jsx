import PropTypes from 'prop-types';

const MapContainer = ({ height }) => {
  return (
    <div className="map-container" style={{ height }}>
      <div className="map-placeholder">
        <p>Carte Google Maps avec géolocalisation des fermes et annonces</p>
      </div>
    </div>
  );
};

MapContainer.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MapContainer.defaultProps = {
  height: 300
};

export default MapContainer;
