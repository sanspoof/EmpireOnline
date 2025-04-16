import styles from './ReviewItem.module.scss';

function ReviewItem({ data }) {
  const { created, title, subtitle, summary, reviewrating } = data;

  return (
    <div className={styles.reviewitem}>
      <p className={styles.reviewitem__date}>{created}</p>
      <h3 className={styles.reviewitem__title}>{title}</h3>
      <h4 className={styles.reviewitem__subtitle}>{subtitle}</h4>
      
      <p className={styles.reviewitem__summary}>{summary}</p> 
      <p className={styles.reviewitem__rating}>{reviewrating}</p>
    </div>
  );
}

export default ReviewItem;