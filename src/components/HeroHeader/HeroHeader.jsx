import { Link } from 'react-router-dom';
import Button from "../UI/Button/Button";
import Loading from '../UI/LoadingSpinner/LoadingSpinner';
import { useHomepageBanner } from '../../hooks/Banner/useHomepageBanner';
import RatingStars from '../UI/RatingStars/RatingStars';
import { useTheme } from '../../context/ThemeContext';
import { useContext } from 'react';
import { ContentfulContext } from '../../context/ContentfulContext';
import { useLocation } from 'react-router-dom';

function HeroHeader({ data = null }) {
  const { isDark } = useTheme();
  const { content } = useContext(ContentfulContext);
  const location = useLocation();
  
  // quick homepage check
  const isHomepage = location.pathname === '/';
  
  // Get the appropriate data source
  const getHeroData = () => {
    // If custom data is provided (from articles/news/reviews etx), use it
    if (data) {

      console.log('Using custom data for hero:', data);

      return {
        title: data.title,
        subtitle: data.subtitle,
        image: data.heroImage || data.image,
        rating: data.reviewrating,
        showButton: false,
        buttonText: null
      };
    }
    
    // If on homepage, try to get latest review data
    if (isHomepage && content?.reviews?.length > 0) {
      const latestReview = content.reviews[0]; // Reviews sorted by data
      return {
        id: latestReview.id,
        title: latestReview.title,
        subtitle: latestReview.subtitle,
        image: latestReview.heroImage || latestReview.image,
        rating: latestReview.reviewrating,
        showButton: true,
        buttonText: "Read Review"
      };
    }
    
    
    return null;
  };

  const heroData = getHeroData();
  const { mainBanner, loading, error } = useHomepageBanner();

  // Show loading state
  if (loading && !heroData) {
    return (
      <div className="h-36 lg:h-hero-height flex items-center justify-center"> 
        <Loading />
      </div>
    );
  }

  // Show error state
  if (error && !heroData) {
    return <div className="text-red-500">Error loading banner</div>;
  }

  // Determine final data to display
  let finalData;
  if (heroData) {
    finalData = heroData;
  } else if (mainBanner) {
    finalData = {
      title: mainBanner.mainTitle,
      subtitle: mainBanner.mainSubtitle,
      image: mainBanner.mainBannerImage,
      rating: null,
      showButton: true,
      buttonText: mainBanner.mainCallToActionButtonText
    };
  } else {
    return <div className="text-gray-900 dark:text-white">No banner data available</div>;
  }

  const { title, subtitle, image, rating, showButton, buttonText, id } = finalData;

  return (
    <div className="grid pt-40 pb-30 lg:pt-[initial] lg:pb-[initial] lg:h-hero-height lg:grid-cols-2 items-center relative px-6 border-b border-b-gray-500">
      <div className="grid justify-items-center md:justify-items-start gap-3 relative z-10">
        {rating && (
          <div className="flex flex-col gap-2">
            <RatingStars size="6" rating={rating} />
          </div>
        )}
        
        <div className={`font-heroheader text-white text-center md:text-left text-3xl md:text-4xl ${
          title.length > 90 ? 'lg:text-4xl' : 'lg:text-6xl'
        }`}>
          {title}
        </div>
        
        <span className="block w-12 border-b border-white"></span>
        
        <div className="text-center md:text-left text-white text-base md:text-lg lg:text-2xl/relaxed font-bold">
          {subtitle}
        </div>
        
        {showButton && buttonText && (
          <Link to={`/review/${finalData.id}`}>
            <Button text={buttonText} />
          </Link>
        )}
      </div>

      <div className="h-full absolute inset-0 z-0">
        {image && (
          <img
            src={image.fields.file.url}
            alt={title}
            className={`w-full h-full object-cover ${isDark ? 'heroimage-radialmask' : ''}`}
          />
        )}
      </div>
    </div>
  );
}

export default HeroHeader;