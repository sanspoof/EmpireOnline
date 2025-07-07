function NewsItem({ data }) {

    const { title, created, image } = data;
    
    const formattedDate = new Date(created).toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className="flex flex-col gap-2">
        <figure className="w-full h-64 overflow-hidden rounded-xl border-brand border-2">
          <img className="object-cover h-64" src={image.fields.file.url} alt={title} />
        </figure>
        <p className="font-body text-white text-sm">{formattedDate}</p>
        <p className="font-headings text-white">{title}</p>
        
      </div>
    );
  }

  export default NewsItem;