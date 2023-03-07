import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux/missions/missionSlice';
import Router from './Router';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}
export default App;
