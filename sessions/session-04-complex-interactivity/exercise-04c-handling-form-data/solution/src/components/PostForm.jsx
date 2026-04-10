import './PostForm.css'

export default function PostForm() {

  function handleFormAction(formData) {
    const fields = Object.fromEntries(formData);
    console.log(fields);
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