import RatingStars from '../UI/RatingStars/RatingStars';
import GoArrow from '../UI/GoArrow/GoArrow';

function ReviewItem({ data }) {
  const { created, title, subtitle, summary, reviewrating, heroImage } = data;
// Log the URL of the hero image

  return (
    <div className="grid gap-1 bg-purple-600">
      {/* <p className={styles.reviewitem__date}>{created}</p> */}
      <img className="" src={heroImage.fields.file.url} alt={title} />
      <h3 className="font-heroheader text-white ">{title}</h3>
      {/* <h4 className={styles.reviewitem__subtitle}>{subtitle}</h4> */}
      <p className="text-sm text-white">{summary}</p> 
      <div className="flex items-center justify-between">
          <RatingStars rating={reviewrating} /> 
        <a href="#" className="">
          <GoArrow />
        </a>
      </div>
    </div>
  );
}

export default ReviewItem;