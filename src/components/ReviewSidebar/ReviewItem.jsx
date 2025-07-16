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
    <Link to={`/review/${id}`} className="group">
    <div className="flex flex-col xl:flex-row items-center relative gap-4 group">
      <div className="flex flex-col gap-1 align-baseline">
          <h3 className="font-headings group-hover:underline underline-offset-4 xl:text-white">{funcRemoveReviewWord(title)}</h3>
          <p className="text-sm text-gray-900 dark:text-white xl:text-white font-medium">{funcTrimSummary(summary, 110)}</p> 
          <div className="flex items-center justify-between">
              {showStars && <RatingStars rating={reviewrating} className="xl:text-white" /> }
              <div className="flex items-center gap-1"> 
                <span className="text-bold font-headings xl:text-white text-sm">Read</span>
                <ArrowRightIcon className="size-5 text-gray-900 dark:text-white xl:text-white group-hover:translate-x-1 transition-transform" />
              </div>
          </div>
      </div>
      <figure className="-order-1 xl:order-2 xl:block overflow-hidden rounded-xl w-full xl:w-28 h-48 md:h-36 xl:h-32 shrink-0 xl:translate-x-9 xl:-ml-9 border-white/28 border-1 xl:border-0">
        <img className="object-cover h-full w-full pointer-events-none grayscale group-hover:grayscale-0" src={heroImage.fields.file.url} alt={title} />
      </figure>
    </div>
   </Link>
  );
}

export default ReviewItem;