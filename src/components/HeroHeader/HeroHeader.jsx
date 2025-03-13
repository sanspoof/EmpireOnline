import { useContext, useEffect } from 'react';
import styles from "./heroheader.module.scss";
import MyButton from "../UI/Button/Button";
import { ContentfulContext } from './../../context/ContentfulContext';

function HeroHeader() {

  const { content, fetchContent, loading } = useContext(ContentfulContext);

  useEffect(() => {
    fetchContent('homepageBanner');
  }, [fetchContent]);

  const banners = content['homepageBanner']; // Expecting an array

  if (loading['homepageBanner']) return <div>Loading...</div>;
  if (!banners || banners.length === 0) return <div>No data available</div>;

  // array index 1
  // set a "makeFrontPage" field to true in Contentful to make this banner appear on the front page
  const banner = banners[1]; 

  return (
    <div className={styles.heroheader}>
      <div className={styles.heroheader__info}>
        <div className={styles.heroheader__title}>{banner.mainTitle}</div>
        <span className={styles.heroheader__dash}></span>
        <div className={styles.heroheader__subtitle}>{banner.mainSubtitle}</div>
        <MyButton text={banner.mainCallToActionButtonText} />
      </div>
      <div className={styles.heroheader__imgwrap}>
        {banner.mainBannerImage && (
          <img
            src={banner.mainBannerImage.fields.file.url}
            alt={banner.mainTitle}
            className={styles.heroheader__img}
          />
        )}
      </div>
    </div>
  );
}

export default HeroHeader;