import styles from "./MainNavigation.module.scss";
import { Link } from "react-router-dom";

function MainNavigation() {

    document.addEventListener("scroll", function() { 

        const nav = document.querySelector(`.${styles.nav}`);

        if (window.scrollY > 0) {

            nav.classList.add("a");

        } else {

            nav.classList.remove("a");

        }

    });

    return (
      <nav className={styles.nav}>
        
        <Link to="/" className={styles.nav__logowrapper}>
          <img className={styles.nav__logo} src="/Images/empirelogo.svg" alt="Empire logo" />
          <p className={styles.nav__logotxt}>World's biggest movie magazine</p>
        </Link>
        
        <div className={styles.nav__navitemwrap}>
            <Link to="/movies" className={styles.nav__navitem}>Movies</Link>
            <div className={styles.nav__navitem}>TV</div>
            <div className={styles.nav__navitem}>Gaming </div>
            <div className={styles.nav__navitem}>Podcasts</div>
            <div className={styles.nav__navitem}>Shopping</div>
            <div className={styles.nav__navitem}>Magazine</div>
            <div className={styles.nav__navitem}>Vip</div>
        </div>

      </nav>
    );
  }

  export default MainNavigation;