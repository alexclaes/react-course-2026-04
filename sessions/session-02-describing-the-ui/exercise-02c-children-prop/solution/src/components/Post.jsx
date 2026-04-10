import './Post.css';
import PostMeta from './PostMeta';
import IconButton from './IconButton';

export default function Post({ title, author, date }) {
  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-content">
         <div className="Post-meta">
          <PostMeta author={author} date={date} />
        </div>
        <div className="Post-button">
          <IconButton>Mehr lesen</IconButton>
        </div>
      </div>
    </article>
  );
}