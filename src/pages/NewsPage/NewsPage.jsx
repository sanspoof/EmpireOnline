import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ContentfulContext } from '../../context/ContentfulContext';
import HeroHeader from '../../components/HeroHeader/HeroHeader';

function NewsPage() {
  const { id } = useParams();
  const { content, fetchContent, loading } = useContext(ContentfulContext);
  const [news, setNews] = useState(null);


  useEffect(() => {

    fetchContent('newsItem'); 

  }, [fetchContent]);

  useEffect(() => {

    if (content.newsItem) { 

      const foundNews = content.newsItem.find(item => item.id === id);

      setNews(foundNews);

    }

  }, [content.newsItem, id]);

  if (loading.newsItem) return <div className="text-white">Loading...</div>;

  if (!news) return <div className="text-white">News not found</div>;

  console.log('News Data:', news);

  return (
    <>
    <HeroHeader data={news} />
    <article className='px-6 py-8' >
                <span className="text-gray-400 dark:text-white">
            {new Date(news.created).toLocaleDateString()}
          </span>
      
        {news.subtitle && (
          <p className="text-xl text-gray-300 mb-4">{news.subtitle}</p>
        )}

      <div className="">
        
        {/* Display the rich text content from newsbody */}
        {news.body && news.body.content && (

          <div className="text-white font-body">

            {news.body.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg text-gray-900 dark:text-white">
                {paragraph.content.map((textNode, textIndex) => (
                  <span 
                    key={textIndex} 
                    className={textNode.marks.some(mark => mark.type === 'italic') ? 'italic' : ''}
                  >
                    {textNode.value}
                  </span>
                ))}
              </p>

            ))}

          </div>
        )}
      </div>
    </article>
    </>
  );
}

export default NewsPage;