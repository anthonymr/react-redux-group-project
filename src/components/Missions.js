import { useSelector } from 'react-redux';
import Mission from './Mission';
import style from '../styles/Missions.module.css';

function Missions() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <section>
      <table className={style.missionstable}>
        <thead className={style.missionstablehead}>
          <tr className={style.missionstablerow}>
            <th scope="col" style={{ width: '10%' }}>Mission</th>
            <th scope="col" style={{ width: '60%' }}>Description </th>
            <th scope="col" style={{ width: '15%' }}>Status</th>
            <th scope="col" style={{ width: '15%' }}>Join</th>
          </tr>
        </thead>
        { missions.map((mission) => (
          <tbody className={style.tablebody} key={mission.id}>
            <Mission
              name={mission.name}
              description={mission.description}
              id={mission.id}
              reserved={mission?.reserved}
            />
          </tbody>
        ))}
      </table>
    </section>
  );
}

export default Missions;
