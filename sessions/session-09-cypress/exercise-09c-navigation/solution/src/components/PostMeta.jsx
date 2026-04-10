import './PostMeta.css';

export default function PostMeta({ author, date }) {
  return (
    <div className="PostMeta">
      <span className="PostMeta-author">von {author}</span>
      <span className="PostMeta-date">
        am <time>{date}</time>
      </span>
    </div>
  );
}