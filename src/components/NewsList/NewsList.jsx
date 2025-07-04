//import { useData } from "../../context/DataContext";
import NewsItem from "../NewsItem/NewsItem";
import React, { useContext, useEffect } from 'react';
import { ContentfulContext } from './../../context/ContentfulContext';
  
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
      <div className="grid gap-2 bg-yellow-600">

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