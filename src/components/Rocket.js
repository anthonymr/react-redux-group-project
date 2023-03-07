import PropTypes from 'prop-types';
import styles from '../styles/Rocket.module.css';

function Rocket({ flickrImages, name, description }) {
  return (
    <article className={styles.rocketContainer}>
      <div className={styles.rocketPicture}>
        <img src={flickrImages[0]} alt={name} />
      </div>
      <div className={styles.rocketContent}>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </article>
  );
}

Rocket.propTypes = {
  flickrImages: PropTypes.arrayOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
