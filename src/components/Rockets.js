import { useSelector } from 'react-redux';
import Rocket from './Rocket';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <section>
      <ul>
        {
          rockets.map((rocket) => (
            <li key={rocket.id}>
              <Rocket flickrImages={rocket.flickr_images} name={rocket.name} description={rocket.description} />
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Rockets;
