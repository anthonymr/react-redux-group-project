import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';
import Rocket from '../components/Rocket';

it('renders correctly', () => {
  const mockedRocket = {
    id: 'testingRocket',
    flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
    name: 'testingRocket',
    description: 'testingDescription',
    reserved: false,
  };
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
        <Rockets />
        <Rocket
          id={mockedRocket.id}
          flickrImages={mockedRocket.flickr_images}
          name={mockedRocket.name}
          description={mockedRocket.description}
          reserved={mockedRocket?.reserved}
        />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
