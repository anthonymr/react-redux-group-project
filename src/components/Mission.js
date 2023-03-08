import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission, leaveMission } from '../redux/missions/missionSlice';

function Mission({
  name, description, id, reserved,
}) {
  const dispatch = useDispatch();

  function reserveClickHandler() {
    dispatch(reserveMission(id));
  }

  function leaveClickHandler() {
    dispatch(leaveMission(id));
  }

  return (
    <tr className="missions-table-row">
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {
          !reserved
          && <span>NOT A MEMBER</span>
        }
        {
          reserved
          && <span>Active Member</span>
        }
      </td>
      <td>
        {
          !reserved
          && <button type="button" onClick={reserveClickHandler}>Join Mission</button>
        }
        {
          reserved
          && <button type="button" onClick={leaveClickHandler}>Leave Mission</button>
        }
      </td>
    </tr>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Mission.defaultProps = {
  reserved: false,
};

export default Mission;
