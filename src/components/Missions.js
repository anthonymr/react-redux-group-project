import { useSelector } from 'react-redux';
import Mission from './Mission';

function Missions() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th scope="col" style={{ width: '10%' }}>Mission</th>
            <th scope="col" style={{ width: '60%' }}>Description </th>
            <th scope="col" style={{ width: '15%' }}>Status</th>
            <th scope="col" style={{ width: '15%' }}>Join</th>
          </tr>
        </thead>
        { missions.map((mission) => (
          <tbody key={mission.id}>
            <Mission
              name={mission.name}
              description={mission.description}
              id={mission.id}
            />
          </tbody>
        ))}
      </table>
    </section>
  );
}

export default Missions;
