import React, { useEffect, useState } from 'react';
import styles from "./heroheader.module.scss";
import MyButton from "../Button/Button";
//import { useData } from "../../context/DataContext";

// move later, just testing
import * as contentful from 'contentful';

function HeroHeader() {

  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize the Contentful client
  const client = contentful.createClient({
    space: '62qazwxhzqwq',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'mtm6vmBbMpY9F_9bTcm7AjoirdN-j4zofvqrmWwq1CI'
  });

  useEffect(() => {
    // Fetch the homepage banner data when the component mounts
    client.getEntries({
      content_type: 'homepageBanner' // Fetch entries of the 'homepageBanner' content type
    })
    .then((response) => {
      // Assuming we only want the first banner (adjust as needed)
      const banner = response.items[0];

      if (banner) {
        setBannerData(banner.fields); // Store banner fields in state
      } else {
        setError('No banner found');
      }
      setLoading(false); // Set loading to false once data is fetched
    })
    .catch((err) => {
      setError(err.message); // Set error message if request fails
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show an error message if the fetch fails
  }

  // Destructure the banner data
  const { mainTitle, mainSubtitle, mainCallToActionButtonText, mainBannerImage, showAsMain } = bannerData;

  // Determine the image URL (make sure the image field exists)
  const imageUrl = mainBannerImage ? mainBannerImage.fields.file.url : '';

  return (
    <div className={styles.heroheader}>
      <div className={styles.heroheader__info}>
        <div className={styles.heroheader__title}>{mainTitle}</div>
        <span className={styles.heroheader__dash}></span>
        <div className={styles.heroheader__subtitle}>{mainSubtitle}</div>
        <MyButton text={mainCallToActionButtonText} />
      </div>
      <div className={styles.heroheader__imgwrap}>
        {imageUrl && <img src={imageUrl} alt={mainTitle} className={styles.heroheader__img} />}
      </div>
    </div>
  );
};


  export default HeroHeader;