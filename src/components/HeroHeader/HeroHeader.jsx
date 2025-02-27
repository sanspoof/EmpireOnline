import styles from "./heroheader.module.scss";
import MyButton from "../Button/Button";
import { useData } from "../../context/DataContext";

function HeroHeader() {

    let data = useData();

    return (
      <div className={styles.heroheader}>
        
        <div className={styles.heroheader__info}> 
            <div className={styles.heroheader__title}>{data.mainCards[0].title}</div>
            <span className={styles.heroheader__dash}></span>
            <div className={styles.heroheader__subtitle}>{data.mainCards[0].subtitle}</div>
            <MyButton text={data.mainCards[0].cta}/>
        </div>
        <div className={styles.heroheader__imgwrap}>
            <img src={data.mainCards[0].image} alt={data.mainCards[0].title} className={styles.heroheader__img}/>
        </div>
      </div>
    );
  }

  export default HeroHeader;