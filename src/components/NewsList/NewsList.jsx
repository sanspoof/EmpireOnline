//import { useData } from "../../context/DataContext";
import NewsItem from "../NewsItem/NewsItem";
import React, { useContext, useEffect } from 'react';
import { ContentfulContext } from './../../context/ContentfulContext';
import styles from "./NewsList.module.scss";
  
  function NewsList() {

  const { content, fetchContent, loading } = useContext(ContentfulContext);

  useEffect(() => {

    fetchContent('newsItem'); // Fetch review items from Contentful

  }, [fetchContent]);

  // Get reviews from the context
  const news = content['newsItem']; // contenful content type

  if (loading['newsItem']) return <div>Loading...</div>;  // Show loading state
  
  if (!news || news.length === 0) return <div>No data available</div>;  // Handle empty state


    return (
      <>
      <div className={styles.newslist}>

        {news.map((newsItem) => (
          <NewsItem 
          key={newsItem.id} 
          data={newsItem}
          /> 
        ))}
        
      </div>
      </>
    );
  }
  
  export default NewsList; 