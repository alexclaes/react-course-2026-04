[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung B**

# Beitragsformular

In dieser Übung fügst du ein HTML-Formular zur Message Board-App hinzu, mit dem Benutzer neue Beiträge erstellen können. Du übst das Erstellen von Formularelementen in JSX, einschließlich Texteingaben, einer Datumseingabe, einem Textbereich und Labels.

## Aufgabe 1: Das Formular erstellen

### Schritt 1: Das Formular-JSX hinzufügen

Erstelle eine neue Datei unter `src/components/PostForm.jsx`.

```jsx
export default function PostForm() {
  return (
    <form className="PostForm">
      {/* Formularfelder kommen hierhin */}
    </form>    
  )
}
```

### Schritt 2: Formularfelder hinzufügen

Füge innerhalb des Formulars Eingabefelder für Titel, Autor, Datum und Zusammenfassung hinzu. Jedes Feld sollte in einem `<div>` mit className `"PostForm--field"` eingeschlossen sein und ein Label enthalten:

```jsx
<form className="PostForm">
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
```

Beachte das `name`-Attribut bei jeder Eingabe! Das wird wichtig, wenn wir die Formularübermittlung in der nächsten Übung verarbeiten.

### Schritt 3: Formular-Styles hinzufügen

Erstelle eine neue Datei unter `src/components/PostForm.css`.

Füge die folgenden Styles für das Formular hinzu:

```css
.PostForm {
  background: var(--color-grey);
  border-radius: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.PostForm--field {
  display: flex;
  gap: 0.5em;
}

.PostForm--field label {
  width: 6em;
}

.PostForm--field input,
.PostForm--field textarea {
  width: 18em;
}

.PostForm--button {
  padding-left: 6.5em;
}
```

Öffne `src/components/PostForm.jsx`. und importiere die Styles:

```jsx
import './PostForm.css'
```

## Aufgabe 2: Das Formular in der App rendern

Öffne `App.jsx` und importieren die neue Komponente:

```jsx
import PostForm from './components/PostForm.jsx';
```

Rendere das Formular unter der Liste:

```jsx
<div className="App">
  <Header />
  <PostList posts={posts} />
  <PostForm />
</div>;
```