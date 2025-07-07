import RatingStars from '../UI/RatingStars/RatingStars';
import GoArrow from '../UI/GoArrow/GoArrow';

function ReviewItem({ data }) {
  const { created, title, subtitle, summary, reviewrating, heroImage } = data;


  
// Log the URL of the hero image

  return (
    <div className="flex items-center relative gap-4">
      <div className="flex flex-col gap-1 align-baseline">
          <h3 className="font-headings text-white ">{title}</h3>
          <p className="text-sm text-white font-medium">{summary}</p> 
          <div className="flex items-center justify-between">
              <RatingStars rating={reviewrating} /> 
            <a href="#" className="">
              <GoArrow />
            </a>
          </div>
      </div>
      <figure className="overflow-hidden rounded-xl w-[120px] h-[140px] shrink-0 translate-x-9 -ml-9">
        <img className="object-cover h-full" src={heroImage.fields.file.url} alt={title} />
      </figure>
    </div>
  );
}

export default ReviewItem;