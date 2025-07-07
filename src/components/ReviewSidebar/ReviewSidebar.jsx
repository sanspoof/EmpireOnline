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
    <div className=" bg-brand col-span-4 p-6 mt-[-70px] z-[10] grid gap-6 content-start rounded-tl-3xl">
      <div className="flex items-center justify-between">
        <h3 className="font-headings text-white text-2xl">Latest Reviews</h3>
        <span className="text-white text-sm font-bold">Show Rating</span>
      </div>
      <div className="grid gap-6 content-baseline">
        {reviews.map((review) => (
          <ReviewItem 
            key={review.id} 
            data={review} 
          />
        ))}
      </div>

    </div>
  );
}

export default ReviewSidebar;