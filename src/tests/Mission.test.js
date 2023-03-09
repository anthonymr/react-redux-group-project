import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';
import Mission from '../components/Mission';

it('renders correctly', () => {
  const mockedMission = {
    id: 'testingMission',
    name: 'testingMission',
    description: 'testingDescription',
    reserved: false,
  };

  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
        <Rockets />
        <Mission
          name={mockedMission.name}
          description={mockedMission.description}
          id={mockedMission.id}
          reserved={mockedMission?.reserved}
        />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
