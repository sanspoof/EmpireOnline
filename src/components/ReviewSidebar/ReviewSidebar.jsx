import React, { useContext, useEffect } from 'react';
import { ContentfulContext } from '../../context/ContentfulContext';
import css from './ReviewSidebar.module.scss';
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
    <div className={css.reviewsidebar}>
      {reviews.map((review) => (
        <ReviewItem 
          key={review.id} 
          data={review} 
        />
      ))}
    </div>
  );
}

export default ReviewSidebar;