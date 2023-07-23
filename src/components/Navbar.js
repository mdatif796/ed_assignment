import styles from "../styles/navbar.module.css";
import logo from "../images/LOGO.png";
import downArrow from "../images/down-arrow.png";
import searchIcon from "../images/search-interface-symbol.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
        <p>
          Courses <img className={styles.downArrow} src={downArrow} alt="" />
        </p>
        <p>
          Programs <img className={styles.downArrow} src={downArrow} alt="" />
        </p>
      </div>
      <div className={styles.rightContainer}>
        <img className={styles.searchIcon} src={searchIcon} alt="" />
        <p>Log in</p>
        <button className={styles.joinBtn}>join now</button>
      </div>
    </nav>
  );
};

export default Navbar;
