import './PostList.css';
import Post from './Post.jsx';
import { useState } from 'react';

export default function PostList({ posts }) {
   const [searchTerm, setSearchTerm] = useState('');

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
          <Post 
            id={post.id}
            title={post.title} 
            author={post.author} 
            date={post.date} 
            summary={post.summary} 
            votes={post.votes}
          />
        </li>
      ))}
    </ul>
    </>
  );
}