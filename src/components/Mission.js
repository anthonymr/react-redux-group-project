import PropTypes from 'prop-types';

function Mission({ name, description }) {
  return (
    <tr className="missions-table-row">
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <span>NOT A MEMBER</span>
      </td>
      <td>
        <button type="button">Join mission</button>
      </td>
    </tr>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
