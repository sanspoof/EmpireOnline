import styles from "./NewsList.module.scss";
import { useData } from "../../context/DataContext";

function NewsItem({ item }) {

    let maxSummaryCount = 190;
    let summary = item.summary;

    return (
      <div className={styles.newsitem}>
        <p>{item.date}</p>
        <h3>{item.headline}</h3> 
        <p>{summary.slice(0, maxSummaryCount) + (summary.length > maxSummaryCount ? "..." : "")}</p> 
        { item.streamingPlatform && <p>{item.streamingPlatform}</p> } 
      </div>
    );
  }
  
  function NewsList() {

    const data = useData(useData)

    return (
      <>
      <div className={styles.newslist}>

        {data.news.map((newsItem) => (
          <NewsItem 
          key={newsItem.id} 
          item={newsItem} 
          /> 
        ))}
        
      </div>
      </>
    );
  }
  
  export default NewsList;