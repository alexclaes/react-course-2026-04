import './PostList.css';
import Post from './Post.jsx';

export default function PostList({ posts }) {
  return (
    <ul className="PostList">
      {posts.map((post) => (
        <li key={post.id} className="PostList-Item">
          <Post title={post.title} author={post.author} date={post.date} summary={post.summary} />
        </li>
      ))}
    </ul>
  );
}