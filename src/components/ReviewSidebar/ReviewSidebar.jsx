import React, { useContext, useEffect } from 'react';
import { ContentfulContext } from '../../context/ContentfulContext';
import css from './ReviewSidebar.module.scss';
import ReviewItem from './ReviewItem'; 
import Loading from '../UI/LoadingSpinner/LoadingSpinner';
 
// ReviewList Component
function ReviewSidebar() {

  const { content, fetchContent, loading } = useContext(ContentfulContext);

  useEffect(() => {

    fetchContent('reviews'); // Fetch review items from Contentful

  }, [fetchContent]);

  // Get reviews from the context
  const reviews = content['reviews']; // contenful content type

  if (loading['reviews']) return <Loading/>;  // Show loading state
  
  if (!reviews || reviews.length === 0) return <div>No data available</div>;  // Handle empty state

  return (
    <div className={css.reviewsidebar}>
      {reviews.map((review) => (
        // Passes the fields from Contentful as props to the ReviewItem component
        <ReviewItem 
            key={review.id} 
            data={review} 
        />
      ))}
    </div>
  );
}

export default ReviewSidebar;