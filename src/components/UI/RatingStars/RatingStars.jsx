import { StarIcon}  from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

function RatingStars({rating, size = '6'}) {

    if(rating === undefined || rating === null) {
        return <div className="">No rating available</div>;
    } else {

        return (

            <div className="flex items-center gap-0.5">
              {/* Filled stars */}
              {Array.from({ length: rating }, (_, i) => (
                <span className={`size-${size} fill-white`} key={`filled-${i}`}><StarIcon className={`size-${size} text-white`} /></span>
              ))}

              {/* Empty stars to make up to 5 total */}
              {Array.from({ length: 5 - rating }, (_, i) => (
                <span className={`size-${size} fill-white`} key={`empty-${i}`}><StarIconOutline className={`size-${size} text-white`} /></span>
              ))}
            </div>
    
          );
    }


    
}

export default RatingStars;