import './Post.css';
import PostMeta from './PostMeta';
import IconButton from './IconButton';
import { useState } from 'react';
import { MdThumbUp } from 'react-icons/md';
import { MdThumbDown } from 'react-icons/md';
import { MdReadMore } from 'react-icons/md';

export default function Post({ id, title, author, date, summary, votes, onUpdatePost }) {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  function handleUpvote() {
    onUpdatePost(id, { votes: votes + 1 });
  }

  function handleDownvote() {
    onUpdatePost(id, { votes: votes - 1 });
  }

  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-votes">
        <IconButton onClick={handleUpvote} icon={<MdThumbUp />}>
          Hochwählen
        </IconButton>
        <IconButton onClick={handleDownvote} icon={<MdThumbDown />}>
          Runterwählen
        </IconButton>
        <p>Stimmen: {votes}</p>
      </div>
      <div className="Post-content">
         <div className="Post-meta">
          <PostMeta author={author} date={date} />
        </div>
        <div className="Post-button">
          <IconButton onClick={toggleShowMore} icon={<MdReadMore />}>
            {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
          </IconButton>
        </div>
        {showMore && <p>{summary}</p>}
      </div>
    </article>
  );
}