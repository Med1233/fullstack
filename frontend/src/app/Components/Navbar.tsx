import Logout from './Logout';
import styles from './Navbar.module.css';

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <div>navber</div>
      <Logout />
    </nav>
  );
};

export default Navbar;
