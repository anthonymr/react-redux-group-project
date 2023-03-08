import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rocket.module.css';

function Rocket({
  id, flickrImages, name, description, reserved,
}) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(bookRocket(id));
  };

  return (
    <article className={styles.rocketContainer}>
      <div className={styles.rocketPicture}>
        <img src={flickrImages[0]} alt={name} />
      </div>
      <div className={styles.rocketContent}>
        <h2>{name}</h2>
        <p>
          { reserved && <span className={styles.reservedLabel}>Reserved</span> }
          {description}
        </p>
        <button type="button" onClick={clickHandler}>Reserve Rocket</button>
      </div>
    </article>
  );
}

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  flickrImages: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};

export default Rocket;
