import { Link } from 'react-router-dom';

function NewsItem({ data }) {

    const { id, title, created, image } = data;
    
    const formattedDate = new Date(created).toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <Link to={`/news/${id}`}>
      <div className="flex flex-col gap-2 group hover:cursor-pointer">
        <figure className="w-full h-64 overflow-hidden rounded-xl border-white/28 border-1">
          <img className="object-cover min-h-full" src={image.fields.file.url} alt={title} />
        </figure>
        <p className="font-body text-white text-sm">{formattedDate}</p>
        <span className="block w-6 border-b border-white"></span>
        <p className="font-headings text-white text-lg group-hover:underline">{title}</p>
        
      </div>
      </Link>
    );
  }

  export default NewsItem;