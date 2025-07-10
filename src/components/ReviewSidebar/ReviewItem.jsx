import { Link } from 'react-router-dom';
import RatingStars from '../UI/RatingStars/RatingStars';
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function ReviewItem({ data, showStars = true }) {
  const { id, created, title, subtitle, summary, reviewrating, heroImage } = data;

  const funcTrimSummary = (text, maxLength) => {

    if (!text) return '';

    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  };

  
  function funcRemoveReviewWord(str) {

    let strs = str.replace(/Review/g, ''); 

    return strs;

  }

  return (
    
    <div className="flex flex-col xl:flex-row items-center relative gap-4 group">
      <div className="flex flex-col gap-1 align-baseline">
          <h3 className="font-headings text-white ">{funcRemoveReviewWord(title)}</h3>
          <p className="text-sm text-white font-medium">{funcTrimSummary(summary, 110)}</p> 
          <div className="flex items-center justify-between">
              {showStars && <RatingStars rating={reviewrating} /> }
            <Link to={`/review/${id}`} className="flex items-center text-sm font-bold gap-1 text-white hover:underline">
              <span>Read</span>
              <ArrowRightIcon className="size-4 text-white" />
            </Link>
          </div>
      </div>
      <figure className="-order-1 xl:order-2 xl:block overflow-hidden rounded-xl w-full xl:w-28 h-36 xl:h-32 shrink-0 xl:translate-x-9 xl:-ml-9">
        <img className="object-cover h-full w-full pointer-events-none grayscale group-hover:grayscale-0" src={heroImage.fields.file.url} alt={title} />
      </figure>
    </div>
   
  );
}

export default ReviewItem;