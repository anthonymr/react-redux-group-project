import { Routes, Route } from 'react-router-dom';
import MissionsRoute from './routes/MissionsRoute';
import RocketsRoute from './routes/RocketsRoute';
import MyProfileRoute from './routes/MyProfileRoute';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RocketsRoute />} />
        <Route path="missions" element={<MissionsRoute />} />
        <Route path="myprofile" element={<MyProfileRoute />} />
      </Routes>
    </>
  );
}

export default Router;
