import styles from './Header.module.css';
import {FaPlane, FaHeart} from "react-icons/fa";
import americaFlag from "../img/america.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <div className={styles.icons}>
            <FaPlane className={styles.plane} />
            <FaHeart className={styles.heart} />
          </div>
          <h1 className={styles.name}>Tripnas</h1>
        </div>
        <ul className={styles.catigories}>
          <li>Flights</li>
          <li>Hotels</li>
        </ul>
        <ul className={styles.links}>
          <li className={styles.flag}>
            <img src={americaFlag} alt='flag.img' />
          </li>
          <li className={styles.service}>Service & Contact</li>
          <li className={styles.logIn}>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;