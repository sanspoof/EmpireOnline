import styles from "./ReviewsList.module.scss";
import { useData } from "../../context/DataContext";


function ReviewItem({ item }) {

    let maxSummaryCount = 190;

    const { title, date, content, rating } = item;

    return (
      <div className={styles.reviewitem}>
        <p className={styles.reviewitem__date}>{date}</p>
        <h3 className={styles.reviewitem__title}>{title}</h3>
        <p className={styles.reviewitem__content}>{content}</p>
        <p className={styles.reviewitem__rating}>{rating}</p>
      </div>
    );
  }
  
  function ReviewList() {



    const data = useData(useData)

    return (
      <>
      <div className={styles.newslist}>

        {data.reviews.map( (el) => (
          <ReviewItem 
          key={el.id} 
          item={el} 
          /> 
        ))}
        
      </div>
      </>
    );
  }
  
  export default ReviewList; 