import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../redux/missions/missionSlice';

function Mission({ name, description, id }) {
  const dispatch = useDispatch();

  function reserveClickHandler() {
    dispatch(reserveMission(id));
  }

  return (
    <tr className="missions-table-row">
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <span>NOT A MEMBER</span>
      </td>
      <td>
        <button type="button" onClick={reserveClickHandler}>Join mission</button>
      </td>
    </tr>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Mission;
