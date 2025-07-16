import { StarIcon}  from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

function RatingStars({rating, size = '5.5', className}) {

    // mapping to Tailwind CSS classes for different size
    // rendering issues otherwise
    const sizeClasses = {
        '4': 'size-4',
        '5': 'size-5',
        '5.5': 'size-5.5',
        '6': 'size-6',
        '8': 'size-8',
        '10': 'size-10',
        '12': 'size-12'
    };

    const sizeClass = sizeClasses[size]; // fallback to size-6

    if(rating === undefined || rating === null) {
        return <div className="">No rating available</div>;
    } else {

        return (

            <div className="flex items-center gap-0.5">
              {/* Filled stars */}
              {Array.from({ length: rating }, (_, i) => (
                <span className={`${sizeClass} fill-white`} key={`filled-${i}`}><StarIcon className={`${sizeClass} text-gray-900 dark:text-white ${className}`} /></span>
              ))}

              {/* Empty stars to make up to 5 total */}
              {Array.from({ length: 5 - rating }, (_, i) => (
                <span className={`${sizeClass} fill-white`} key={`empty-${i}`}><StarIconOutline className={`${sizeClass} text-gray-900 dark:text-white ${className}`} /></span>
              ))}
            </div>
    
          );
    }


    
}

export default RatingStars;