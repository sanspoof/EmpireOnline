import { useContext, useEffect } from 'react';
import styles from "./heroheader.module.scss";
import MyButton from "../UI/Button/Button";
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
    <div className={styles.heroheader}>
      <div className={styles.heroheader__info}>
        <div className="font-heroheader text-white text-5xl">{mainTitle}</div>
        <span className={styles.heroheader__dash}></span>
        <div className="font-body text-white text-lg/relaxed">{mainSubtitle}</div>
        <MyButton text={mainCallToActionButtonText} />
      </div>
      <div className={styles.heroheader__imgwrap}>
        {mainBannerImage && (
          <img
            src={mainBannerImage.fields.file.url}
            alt={mainTitle}
            className={styles.heroheader__img}
          />
        )}
      </div>
    </div>
  );
}

export default HeroHeader;