import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ContentfulContext } from '../../context/ContentfulContext';
import HeroHeader from '../../components/HeroHeader/HeroHeader';

function ReviewPage() {
  const { id } = useParams();
  const { content, fetchContent, loading } = useContext(ContentfulContext);
  const [review, setReview] = useState(null);

  useEffect(() => {

    fetchContent('reviews'); // reviews!!!!! not review

  }, [fetchContent]);

  useEffect(() => {

    if (content.reviews) { 

      const foundReview = content.reviews.find(item => item.id === id);

      setReview(foundReview);

    }

  }, [content.reviews, id]);

  if (loading.reviews) return <div className="text-white">Loading...</div>;

  if (!review) return <div className="text-white">Review not found</div>;

  return (
    <>
    <HeroHeader data={review} />
    <article className='px-6 py-8' >
                <span className="text-gray-400">
            {new Date(review.created).toLocaleDateString()}
          </span>
      
        {review.subtitle && (
          <p className="text-xl text-gray-300 mb-4">{review.subtitle}</p>
        )}

      
      
      <div className="prose prose-invert max-w-none">
        
        
        {/* Display the rich text content from reviewbody */}
        {review.reviewbody && review.reviewbody.content && (

          <div className="text-white font-body">

            {review.reviewbody.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg">
                {paragraph.content.map((textNode, textIndex) => (
                  <span 
                    key={textIndex} 
                    className={textNode.marks.some(mark => mark.type === 'italic') ? 'italic' : ''}
                  >
                    {textNode.value}
                  </span>
                ))}
              </p>

            ))}

          </div>
        )}
      </div>
    </article>
    </>
  );
}

export default ReviewPage;