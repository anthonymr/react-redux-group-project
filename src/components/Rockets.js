import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import styles from '../styles/Rockets.module.css';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <section className={styles.rocketsContainer}>
      <ul className={styles.rocketList}>
        {
          rockets.map((rocket) => (
            <li key={rocket.id}>
              <Rocket
                id={rocket.id}
                flickrImages={rocket.flickr_images}
                name={rocket.name}
                description={rocket.description}
                reserved={rocket?.reserved}
              />
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Rockets;
