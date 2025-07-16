import Button from "../UI/Button/Button";
import Loading from '../UI/LoadingSpinner/LoadingSpinner';
import { useHomepageBanner } from '../../hooks/Banner/useHomepageBanner';
import RatingStars from '../UI/RatingStars/RatingStars';
import { useTheme } from '../../context/ThemeContext';

function HeroHeader({ data = null }) {

const { isDark } = useTheme();

  // If custom data is provided, use it instead of the banner that is set in contentful
  // so news and review pages can use this component
  if (data) {
    const { title, subtitle, heroImage, image, reviewrating } = data;
    
    console.log('HeroHeader Data:', data);

    return (
      <div className="grid pt-40 pb-30 lg:pt-[initial] lg:pb-[initial] lg:h-hero-height lg:grid-cols-2 items-center relative px-6 border-b border-b-gray-500">
        <div className="grid justify-items-center md:justify-items-start gap-3 relative z-10">
          {reviewrating && (
            <div className="flex flex-col gap-2">
              <RatingStars size="6" rating={reviewrating} />
              {/* <span className="text-white">Rating: {reviewrating}/5</span> */}
            </div>
          )}
          <div className="font-heroheader text-white text-center md:text-left text-2xl md:text-4xl lg:text-6xl">{title}</div>
          <span className="block w-12 border-b border-white"></span>
          <div className="text-center md:text-left text-white text-base md:text-lg lg:text-2xl/relaxed font-bold">{subtitle}</div>

        </div>
        <div className="h-full absolute inset-0 z-0">
          {(heroImage || image) && (
            <img
              src={(heroImage || image).fields.file.url}
              alt={title}
              className={`w-full h-full object-cover ${isDark ? 'heroimage-radialmask' : ''}`}
            />
          )}
        </div>
      </div>
    );
  }

  const { mainBanner, loading, error } = useHomepageBanner();


  // Default homepage banner behavior
  if (loading) return (
  <div className="h-36 lg:h-hero-height flex items-center justify-center"> 
    <Loading />
  </div>
);

  if (error) return <div className="text-red-500">Error:</div>;
  if (!mainBanner) return <div className="text-gray-900 dark:text-white">No banner data available</div>;

  const { mainTitle, mainSubtitle, mainCallToActionButtonText, mainBannerImage } = mainBanner;

  //console.log(mainBanner)

  return (
    <div className="grid pt-48 pb-30 lg:pt-[initial] lg:pb-[initial] lg:h-hero-height lg:grid-cols-2 items-center relative px-6 border-b border-b-gray-500">
      <div className="grid justify-items-center md:justify-items-start gap-3 relative z-10">
        <div className="font-heroheader text-white text-center md:text-left text-3xl md:text-4xl lg:text-6xl">{mainTitle}</div>
        <span className="block w-12 border-b border-white"></span>
        <div className="text-center md:text-left text-white text-base md:text-lg lg:text-2xl/relaxed font-bold">{mainSubtitle}</div>
        <Button text={mainCallToActionButtonText} />
      </div>
      <div className="h-full absolute inset-0 z-0">
        {mainBannerImage && (
          <img
            src={mainBannerImage.fields.file.url}
            alt={mainTitle} 
            className={`w-full h-full object-cover ${isDark ? 'heroimage-radialmask' : ''}`}
          />
        )}
      </div>
    </div>
  );

}

export default HeroHeader;