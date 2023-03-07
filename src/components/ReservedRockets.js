import { useSelector } from 'react-redux';
import styles from '../styles/ReservedRockets.module.css';

function ReservedRockets() {
  const { rockets } = useSelector((status) => status.rockets);

  const bookedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className={styles.reservedContainer}>
      <h2>My Rockets</h2>
      <ul>
        {
            bookedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))
        }
      </ul>
    </section>
  );
}

export default ReservedRockets;
