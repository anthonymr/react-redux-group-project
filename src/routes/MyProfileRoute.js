import React from 'react';
import ReservedRockets from '../components/ReservedRockets';
import ReservedMissions from '../components/ReservedMissions';

function MyProfileRoute() {
  return (
    <section className="myProfileContainer">
      <ReservedMissions />
      <ReservedRockets />
    </section>
  );
}

export default MyProfileRoute;
