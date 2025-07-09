import { useContext, useEffect, useMemo } from 'react';
import { ContentfulContext } from '../../context/ContentfulContext';

export function useHomepageBanner() {
  const { content, fetchContent, loading, error } = useContext(ContentfulContext);

  useEffect(() => {
    fetchContent('homepageBanner');
  }, [fetchContent]);

  const banners = content['homepageBanner'];
  
  const mainBanner = useMemo(() => {
    if (!banners || banners.length === 0) return null;
    return banners.find(item => item.showAsMain === true) || banners[0];
  }, [banners]);

  return {
    mainBanner,
    allBanners: banners,
    loading: loading['homepageBanner'],
    error: error
  };
}