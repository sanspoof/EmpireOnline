import { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./MainNavigation.module.scss";

function MainNavigation() {

  useEffect(() => {
    const nav = document.querySelector(`.${s.nav}`);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        nav.classList.add("a");
      } else {
        nav.classList.remove("a");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <nav className={s.nav}>
      <Link to="/" className={s.nav__logowrapper}>
        <svg className={s.nav__logo} id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.73 45.39" preserveAspectRatio="xMinYMin slice">
          <g id="Top">
            <path d="M0,0h59.19v10.49H14.76v8.21h34.56v7.73H14.76v8.48h45.32v10.49H0V0ZM64.09,0h23.66l20.9,30.08h.07L129.28,0h22.97v45.39h-14.76V10.69h-.07l-23.66,34.7h-11.45l-24.08-34.7h-.07v34.7h-14.07V0ZM158.05,0h37.73c18.07,0,29.8,4.07,29.8,16.14s-10.21,16.07-29.8,16.07h-22.97v13.18h-14.76V0ZM195.78,23.66c10.21,0,16.14-1.66,16.14-6.62s-5.93-6.55-16.21-6.55h-22.9v13.18h22.97ZM228.9,0h14.76v45.39h-14.76V0ZM249.73,0h42.15c20.42,0,27.39,5.38,27.39,13.52,0,4.48-2.35,9.24-11.87,10.83v.14c10.07,1.38,11.59,5.93,11.59,11.45v9.45h-14.76v-9.45c0-3.59-.55-6.62-11.45-6.62h-28.28v16.07h-14.76V0ZM291.88,21.45c9.52,0,13.45-1.79,13.45-5.66,0-3.45-3.59-5.31-13.45-5.31h-27.39v10.97h27.39ZM324.65,0h59.19v10.49h-44.43v8.21h34.56v7.73h-34.56v8.48h45.32v10.49h-60.08V0Z" />
          </g>
        </svg>
      </Link>

      <div className={s.nav__navitemwrap}>
        <Link to="/movies" className={s.nav__navitem}>Movies</Link>
        <div className={s.nav__navitem}>TV</div>
        <div className={s.nav__navitem}>Gaming</div>
        <div className={s.nav__navitem}>Podcasts</div>
        <div className={s.nav__navitem}>Shopping</div>
        <div className={s.nav__navitem}>Magazine</div>
        <div className={s.nav__navitem}>Vip</div>
      </div>
    </nav>
  );
}

export default MainNavigation;