import { NavLink } from 'react-router-dom';

function Route() {
  return (
    <ul>
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="missions">Missions</NavLink>
      </li>
      <li>
        |
      </li>
      <li>
        <NavLink to="myprofile">My profile</NavLink>
      </li>
    </ul>
  );
}
export default Route;
