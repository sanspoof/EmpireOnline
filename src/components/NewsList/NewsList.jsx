import styles from "./NewsList.module.scss";
import { useData } from "../../context/DataContext";

function NewsItem({ item }) {
    return (
      <div className={styles.newsitem}>
        <h3>{item.headline}</h3>
        <p>{item.summary}</p>
      </div>
    );
  }
  
  function NewsList() {

    const data = useData(useData)

    return (
      <div className={styles.newslist}>

        {data.news.map((newsItem) => (
          <NewsItem key={newsItem.id} item={newsItem} /> // note to Alex, look at assigning key without hardcoding the ID in the data...
        ))}
        
      </div>
    );
  }
  
  export default NewsList;