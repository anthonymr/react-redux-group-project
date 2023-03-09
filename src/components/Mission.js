import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission, leaveMission } from '../redux/missions/missionSlice';
import style from '../styles/Mission.module.css';

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
    <tr className={style.missionstablerow}>
      <td className={style.missionstablename}>{name}</td>
      <td>{description}</td>
      <td>
        {
          !reserved
          && <span className={style.labelNotMember}>NOT A MEMBER</span>
        }
        {
          reserved
          && <span>Active Member</span>
        }
      </td>
      <td>
        {
          !reserved
          && <button type="button" onClick={reserveClickHandler} className={style.joinbutton}>Join Mission</button>
        }
        {
          reserved
          && <button type="button" onClick={leaveClickHandler} className={style.leavebutton}>Leave Mission</button>
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
