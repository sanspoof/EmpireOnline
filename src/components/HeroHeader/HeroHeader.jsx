import styles from "./heroheader.module.scss";
import MyButton from "../Button/Button";

function HeroHeader() {
    return (
      <div className={styles.heroheader}>
        
        <div className={styles.heroheader__info}> 
            <div className={styles.heroheader__title}>Arrival</div>
            <span className={styles.heroheader__dash}></span>
            <div className={styles.heroheader__subtitle}>Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world.</div>
            <MyButton text="Read the Review"/>
        </div>
        <div className={styles.heroheader__imgwrap}>image</div>
      </div>
    );
  }

  export default HeroHeader;