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
      <section className="grid col-span-full md:col-span-6 lg:col-span-8 gap-2 content-start px-6 py-6 md:pl-6 md:pr-0">
      <h3 className="heading-primary">Latest Movie News</h3>
      <span className="block w-12 border-b border-white mb-2"></span>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {news.map((newsItem) => (
          <NewsItem 
          key={newsItem.id} 
          data={newsItem}
          /> 
        ))}
        
      </div>
      </section>
    );
  }
  
  export default NewsList; 