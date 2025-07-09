import Button from "../UI/Button/Button";
import Loading from '../UI/LoadingSpinner/LoadingSpinner';
import { useHomepageBanner } from '../../hooks/Banner/useHomepageBanner';
import RatingStars from '../UI/RatingStars/RatingStars';

function HeroHeader({ data = null }) {

  // If custom data is provided, use it instead of the banner that is set in contentful
  if (data) {
    const { title, subtitle, heroImage, reviewrating } = data;
    
    return (
      <div className="grid h-hero-height grid-cols-2 items-center relative px-6 border-b border-b-gray-500">
        <div className="grid justify-items-start gap-3 relative z-10">
          <div className="font-heroheader text-white text-6xl">{title}</div>
          <span className="block w-12 border-b border-white"></span>
          <div className="font-body text-white text-xl/relaxed">{subtitle}</div>
          {reviewrating && (
            <div className="flex items-center gap-2">
              <RatingStars size="10" rating={reviewrating} />
              <span className="text-white">Rating: {reviewrating}/5</span>
            </div>
          )}
        </div>
        <div className="h-full absolute inset-0 z-0">
          {heroImage && (
            <img
              src={heroImage.fields.file.url}
              alt={title}
              className="w-full h-full object-cover heroimage-radialmask"
            />
          )}
        </div>
      </div>
    );
  }

  const { mainBanner, loading, error } = useHomepageBanner();

  // Default homepage banner behavior
  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">Error:</div>;
  if (!mainBanner) return <div className="text-white">No banner data available</div>;

  const { mainTitle, mainSubtitle, mainCallToActionButtonText, mainBannerImage } = mainBanner;

  //console.log(mainBanner)

  return (
    <div className="grid h-hero-height grid-cols-2 items-center relative px-6 border-b border-b-gray-500">
      <div className="grid justify-items-start gap-3 relative z-10">
        <div className="font-heroheader text-white text-6xl">{mainTitle}</div>
        <span className="block w-12 border-b border-white"></span>
        <div className="font-body text-white text-xl/relaxed">{mainSubtitle}</div>
        <Button text={mainCallToActionButtonText} />
      </div>
      <div className="h-full absolute inset-0 z-0">
        {mainBannerImage && (
          <img
            src={mainBannerImage.fields.file.url}
            alt={mainTitle}
            className="w-full h-full object-cover heroimage-radialmask"
          />
        )}
      </div>
    </div>
  );
}

export default HeroHeader;