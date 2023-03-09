import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';
import ReservedMissions from '../components/ReservedMissions';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
        <Rockets />
        <ReservedMissions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
