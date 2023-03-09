import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Mission from './Mission';
import { getMissions } from '../redux/missions/missionSlice';
import style from '../styles/Missions.module.css';

function Missions() {
  const dispatch = useDispatch();
  const { missions, loaded } = useSelector((state) => state.missions);

  useEffect(() => {
    if (!loaded) {
      dispatch(getMissions());
    }
  }, [dispatch, loaded]);

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
