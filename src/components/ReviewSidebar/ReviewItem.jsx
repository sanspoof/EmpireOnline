import styles from './ReviewItem.module.scss';
import RatingStars from '../UI/RatingStars/RatingStars';
import GoArrow from '../UI/GoArrow/GoArrow';

function ReviewItem({ data }) {
  const { created, title, subtitle, summary, reviewrating, heroImage } = data;
// Log the URL of the hero image

  return (
    <div className={styles.reviewitem}>
      {/* <p className={styles.reviewitem__date}>{created}</p> */}
      <img className={styles.reviewitem__img} src={heroImage.fields.file.url} alt={title} />
      <h3 className={styles.reviewitem__title}>{title}</h3>
      {/* <h4 className={styles.reviewitem__subtitle}>{subtitle}</h4> */}
      <p className={styles.reviewitem__summary}>{summary}</p> 
      <div className={styles.reviewitem__ratingcontainer}>
          <RatingStars rating={reviewrating} /> 
        <a href="#" className={styles.reviewitem__readmore}>
          <GoArrow />
        </a>
      </div>
    </div>
  );
}

export default ReviewItem;