import { useContext, useEffect } from 'react';
import { ContentfulContext } from '../../context/ContentfulContext';
import ReviewItem from './ReviewItem'; 
import Loading from '../UI/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import EmptyState from '../UI/EmptyState/EmptyState';
 
function ReviewSidebar() {

  const { content, fetchContent, loading, error } = useContext(ContentfulContext);

  useEffect(() => {

    fetchContent('reviews');
    
  }, [fetchContent]);
  

  const reviews = content['reviews'];

  if (loading['reviews']) return <Loading />;

  if (error?.reviews) return <ErrorMessage message="Failed to load reviews." />;

  if (!reviews || reviews.length === 0) return <EmptyState message="No reviews available." />;

  return (
    <div className="md:h-full xl:h-auto xl:bg-brand col-span-full md:col-span-6 lg:col-span-4 xl:mt-[-62px] z-[10] grid content-start xl:rounded-tl-3xl rounded-bl-sm translate-x-[1px] xl:shadow-reviewsidebar md:border-l xl:border border-gray-500 xl:border-white/25 md:max-w-md justify-self-end">
      <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-gray-500 xl:border-white/25">
        <h3 className="heading-primary">Latest Reviews</h3>
      </div>
      <div className="grid gap-6 content-baseline px-6 xl:pl-6 xl:pr-2 pb-6 pt-3">
        {reviews.map((review) => (
          <ReviewItem 
            key={review.id} 
            data={review}
            showStars={true} 
          />
        ))}
      </div>

    </div>
  );
}

export default ReviewSidebar;