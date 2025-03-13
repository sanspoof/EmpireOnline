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

  // show as main set in contentful
  const mainItem = banners.find(item => item.showAsMain === true);

  console.log(mainItem);

  return (
    <div className={styles.heroheader}>
      <div className={styles.heroheader__info}>
        <div className={styles.heroheader__title}>{mainItem.mainTitle}</div>
        <span className={styles.heroheader__dash}></span>
        <div className={styles.heroheader__subtitle}>{mainItem.mainSubtitle}</div>
        <MyButton text={mainItem.mainCallToActionButtonText} />
      </div>
      <div className={styles.heroheader__imgwrap}>
        {mainItem.mainBannerImage && (
          <img
            src={mainItem.mainBannerImage.fields.file.url}
            alt={mainItem.mainTitle}
            className={styles.heroheader__img}
          />
        )}
      </div>
    </div>
  );
}

export default HeroHeader;