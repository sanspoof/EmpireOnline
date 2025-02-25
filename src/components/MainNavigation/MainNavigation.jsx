import styles from "./MainNavigation.module.scss";

function MainNavigation() {
    return (
      <div className={styles.nav}>
        
        <div className={styles.nav__logowrapper}>
          <img className={styles.nav__logo} src="/Images/empirelogo.svg" alt="Empire logo" />
          <p className={styles.nav__logotxt}>World's biggest movie magazine</p>
        </div>
        
        <div className={styles.nav__navitemwrap}>
            <div className={styles.nav__navitem}>Movies</div>
            <div className={styles.nav__navitem}>TV</div>
            <div className={styles.nav__navitem}>Gaming </div>
            <div className={styles.nav__navitem}>Podcasts</div>
            <div className={styles.nav__navitem}>Shopping</div>
            <div className={styles.nav__navitem}>Magazine</div>
            <div className={styles.nav__navitem}>Vip</div>
        </div>

      </div>
    );
  }

  export default MainNavigation;