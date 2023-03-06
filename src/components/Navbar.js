import styles from '../styles/Navbar.module.css';
import planet from '../assets/planet.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={planet} alt="Space Travelers&apos; Hub" />
        <span>Space Travelers&apos; Hub</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
