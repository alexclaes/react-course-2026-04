import './PostList.css';
import Post from './Post.jsx';
import { useState, useContext } from 'react';
import { PostsContext } from '../PostsContext';
import { Link } from "react-router";

export default function PostList() {
  const { posts } = useContext(PostsContext);
  const [searchTerm, setSearchTerm] = useState('');

  if (posts.length === 0) {
    return <p>Laden...</p>;
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
   
  return (
    <>
      <input
        type="text"
        placeholder="Suchen..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="PostList-Search"
      />
    <ul className="PostList">
      {filteredPosts.map((post) => (
        <li key={post.id} className="PostList-Item">
          <Link to={`/posts/${post.id}`}>
            <strong>{post.title}</strong> von {post.author} - Stimmen: {post.votes}
          </Link>
        </li>
      ))}
    </ul>
    </>
  );
}