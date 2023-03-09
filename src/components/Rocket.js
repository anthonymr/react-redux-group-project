import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelBookRocket } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rocket.module.css';

function Rocket({
  id, flickrImages, name, description, reserved,
}) {
  const dispatch = useDispatch();

  const reserveClickHandler = () => {
    dispatch(bookRocket(id));
  };

  const cancelationClickHandler = () => {
    dispatch(cancelBookRocket(id));
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
        { !reserved && <button type="button" onClick={reserveClickHandler}>Reserve Rocket</button> }
        { reserved
          && (
          <button type="button" onClick={cancelationClickHandler} className={styles.cancel}>
            Cancel Reservation
          </button>
          )}
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
