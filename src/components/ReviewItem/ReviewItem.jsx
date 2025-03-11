import styles from './ReviewItem.module.scss';

function ReviewItem({ data, isReviewPage }) {

  const { created, title, subtitle, reviewbody, summary, reviewrating } = data;

  const reviewContent = reviewbody.content;

  // Function to render the content based on nodeType
  const renderContent = (content) => {

    if (isReviewPage === true) {
        console.log("Reviewpage");
    }

    return content.map((el, index) => {
      
      switch (el.nodeType) {

        case 'text':

          return <p className={styles.reviewitem__content} key={index}>{el.value}</p>;

        case 'paragraph':

          return <div key={index} className={styles.paragraph}>{renderContent(el.content)}</div>;

        default:

          return null;

      }

    });


  };

  return (
    <div className={styles.review}>
      <p className={styles.review__date}>{created}</p>
      <h3 className={styles.review__title}>{title}</h3>
      <h3 className={styles.review__subtitle}>{subtitle}</h3>
      <div className={styles.review__contentwrap}>

        {renderContent(reviewContent)}

      </div>
      <p className={styles.review__summary}>{summary}</p> 
      <p className={styles.review__rating}>{reviewrating}</p>
    </div>
  );
}

export default ReviewItem;