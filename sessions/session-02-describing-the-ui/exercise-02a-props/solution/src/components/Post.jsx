import './Post.css';

export default function Post({ title, author, date }) {
  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-content">
        <span className="Post-author">von{author}</span>
        <span className="Post-date">
          am <time>{date}</time>
        </span>
        <div className="Post-button">
          <button>Mehr lesen</button>
        </div>
      </div>
    </article>
  );
}