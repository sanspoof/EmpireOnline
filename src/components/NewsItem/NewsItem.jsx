function NewsItem({ data }) {

    const { title, created, image } = data;
    
    return (
      <div className="bg-amber-200">
        <p>{created}</p>
        <p>{title}</p>
        <img src={image.fields.file.url} alt={title} />
      </div>
    );
  }

  export default NewsItem;