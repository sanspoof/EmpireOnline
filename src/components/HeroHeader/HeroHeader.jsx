import { useContext, useEffect } from 'react';
import Button from "../UI/Button/Button";
import { ContentfulContext } from './../../context/ContentfulContext';
import Loading from '../UI/LoadingSpinner/LoadingSpinner';

function HeroHeader() {

  const { content, fetchContent, loading } = useContext(ContentfulContext);

  useEffect(() => {
    fetchContent('homepageBanner');
  }, [fetchContent]);

  const banners = content['homepageBanner']; // Expecting an array

  if (loading['homepageBanner']) return <Loading/>;
  if (!banners || banners.length === 0) return <div>No data available</div>;

  // show as main set in contentful
  const mainItem = banners.find(item => item.showAsMain === true);

  const { mainTitle, mainSubtitle, mainCallToActionButtonText, mainBannerImage } = mainItem;

  return (
    <div className="grid h-hero-height grid-cols-2 items-center">
      <div className="grid justify-items-start gap-3">
        <div className="font-heroheader text-white text-5xl">{mainTitle}</div>
        <span className="block w-12 border-b border-white"></span>
        <div className="font-body text-white text-lg/relaxed">{mainSubtitle}</div>
        <Button text={mainCallToActionButtonText} />
      </div>
      <div className="h-full relatives">
        {mainBannerImage && (
          <img
            src={mainBannerImage.fields.file.url}
            alt={mainTitle}
            className="w-full h-full object-cover heroimage-mask"
          />
        )}
      </div>
    </div>
  );
}

export default HeroHeader;