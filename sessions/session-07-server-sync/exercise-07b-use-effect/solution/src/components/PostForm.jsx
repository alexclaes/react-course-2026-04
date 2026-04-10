import './PostForm.css'
import { useContext } from 'react';
import { PostsContext } from '../PostsContext';
import { useNavigate } from "react-router";

export default function PostForm() {
  const { createPost } = useContext(PostsContext);
  const navigate = useNavigate();

  function handleFormAction(formData) {
    const fields = Object.fromEntries(formData);
    createPost(fields);
    navigate('/posts');
  }

  return (
    <form className="PostForm" action={handleFormAction}>
      <div className="PostForm--field">
        <label>Titel:</label>
        <input name="title" type="text" required />
      </div>
      <div className="PostForm--field">
        <label>Autor:</label>
        <input name="author" type="text" required />
      </div>
      <div className="PostForm--field">
        <label>Datum:</label>
        <input name="date" type="date" required />
      </div>
      <div className="PostForm--field">
        <label>Zusammenfassung:</label>
        <textarea name="summary" required />
      </div>
      <div className="PostForm--button">
        <button type="submit">Neuen Beitrag hinzufügen</button>
      </div>
    </form>   
  )
}