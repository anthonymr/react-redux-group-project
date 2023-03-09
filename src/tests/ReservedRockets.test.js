import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';
import ReservedRockets from '../components/ReservedRockets';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
        <Rockets />
        <ReservedRockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
