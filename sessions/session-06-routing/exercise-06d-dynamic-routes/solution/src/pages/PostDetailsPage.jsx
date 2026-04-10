import { useParams } from "react-router";
import { useContext } from "react";
import { PostsContext }  from "../PostsContext";
import Post from "../components/Post";

export default function PostDetailsPage() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if(!post) {
    return <p>Nicht gefunden</p>
  }

  return (
    <Post
      id={post.id}
      title={post.title}
      author={post.author}
      date={post.date}
      summary={post.summary}
      votes={post.votes}
    />
  );
}