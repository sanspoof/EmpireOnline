import styles from "./heroheader.module.scss";
import MyButton from "../Button/Button";
import { useData } from "../../context/DataContext";

function HeroHeader() {

    let data = useData();
    let indextouse = 0;
    
    const { title, subtitle, cta, image } = data.mainCards[indextouse];

    return (
      <div className={styles.heroheader}>
        
        <div className={styles.heroheader__info}> 
            <div className={styles.heroheader__title}>{title}</div>
            <span className={styles.heroheader__dash}></span>
            <div className={styles.heroheader__subtitle}>{subtitle}</div>
            <MyButton text={cta}/>
        </div>
        <div className={styles.heroheader__imgwrap}>
            <img src={image} alt={title} className={styles.heroheader__img}/>
        </div>
      </div>
    );
  }

  export default HeroHeader;