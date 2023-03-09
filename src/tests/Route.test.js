import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Route from '../components/Route';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Route />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
