import { useSelector } from 'react-redux';
import styles from '../styles/Reserved.module.css';

function ReservedMissions() {
  const { missions } = useSelector((status) => status.missions);

  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <section className={styles.reservedContainer}>
      <h2>My Missions</h2>
      <ul>
        {
            joinedMissions.map((mission) => (
              <li key={mission.id}>{mission.name}</li>
            ))
        }
      </ul>
    </section>
  );
}

export default ReservedMissions;
