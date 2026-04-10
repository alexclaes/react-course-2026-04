export default function Post() {
  return (
    <article className="Post">
      <h2 className="Post-title">Mein erster Beitrag</h2>
      <div className="Post-content">
        <span className="Post-author">von Alex</span>
        <span className="Post-date">
          am <time>2024-06-19</time>
        </span>
        <div className="Post-button">
          <button>Mehr lesen</button>
        </div>
      </div>
    </article>
  );
}