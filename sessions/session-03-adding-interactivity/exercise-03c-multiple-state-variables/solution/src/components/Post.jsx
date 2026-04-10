import './Post.css';
import PostMeta from './PostMeta';
import IconButton from './IconButton';
import { useState } from 'react';
import { MdThumbUp } from 'react-icons/md';
import { MdThumbDown } from 'react-icons/md';

export default function Post({ title, author, date, summary }) {
  const [showMore, setShowMore] = useState(false);
  const [votes, setVotes] = useState(0);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  function handleUpvote() {
    setVotes(votes + 1);
  }

  function handleDownvote() {
    setVotes(votes - 1);
  }

  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-votes">
        <button onClick={handleUpvote}>
          Hochwählen <MdThumbUp /> 
        </button>
        <button onClick={handleDownvote}>
          Runterwählen <MdThumbDown /> 
        </button>
        <p>Stimmen: {votes}</p>
      </div>
      <div className="Post-content">
         <div className="Post-meta">
          <PostMeta author={author} date={date} />
        </div>
        <div className="Post-button">
          <IconButton onClick={toggleShowMore}>
            {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
          </IconButton>
        </div>
        {showMore && <p>{summary}</p>}
      </div>
    </article>
  );
}