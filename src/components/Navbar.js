import styles from '../styles/Navbar.module.css';
import planet from '../assets/planet.png';
import Route from './Route';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={planet} alt="Space Travelers&apos; Hub" />
        <span>Space Travelers&apos; Hub</span>
      </div>
      <nav className={styles.nav}>
        <Route />
      </nav>
    </header>
  );
}
export default Navbar;
