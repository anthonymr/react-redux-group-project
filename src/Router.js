import { Routes, Route } from 'react-router-dom';
import MissionsRoute from './routes/MissionsRoute';
import RocketsRoute from './routes/RocketsRoute';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RocketsRoute />} />
        <Route path="missions" element={<MissionsRoute />} />
      </Routes>
    </>
  );
}

export default Router;
