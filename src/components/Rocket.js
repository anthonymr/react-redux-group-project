import PropTypes from 'prop-types';

function Rocket({ flickrImages, name, description }) {
  return (
    <article>
      <div>
        <img src={flickrImages[0]} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </article>
  );
}

Rocket.propTypes = {
  flickrImages: PropTypes.arrayOf([]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
