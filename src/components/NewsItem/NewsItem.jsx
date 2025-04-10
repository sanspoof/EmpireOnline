import styles from "./NewsItem.module.scss";

function NewsItem({ data }) {

    const { title, created, image } = data;
    
    return (
      <div className={styles.newsitem}>
        <p>{created}</p>
        <p>{title}</p>
        <img src={image.fields.file.url} alt={title} />
      </div>
    );
  }

  export default NewsItem;