import React, { useContext, useEffect } from 'react';
import { ContentfulContext } from './../../context/ContentfulContext';
import css from './ReviewsList.module.scss';
import ReviewItem from '../Review/ReviewItem';

// ReviewList Component
function ReviewList() {
  const { content, fetchContent, loading } = useContext(ContentfulContext);

  useEffect(() => {

    fetchContent('reviews'); // Fetch review items from Contentful

  }, [fetchContent]);

  // Get reviews from the context
  const reviews = content['reviews']; // contenful content type

  if (loading['reviews']) return <div>Loading...</div>;  // Show loading state
  
  if (!reviews || reviews.length === 0) return <div>No data available</div>;  // Handle empty state

  console.log(reviews);

  return (
    <div className={css.reviewlist}>
      {reviews.map((review) => (
        // Pass the fields from Contentful as props to the ReviewItem component
        <ReviewItem 
            key={review.id} 
            data={review} 
            reviewpage={false} 
        />
      ))}
    </div>
  );
}

export default ReviewList;