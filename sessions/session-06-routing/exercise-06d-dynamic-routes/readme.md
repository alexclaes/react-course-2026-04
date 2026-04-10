[Zurück zur Session-Übersicht](../readme.md)

# Übung D: Beitragsdetails-Seite

## Ziel

Erstelle eine Detailseite für einzelne Beiträge mit dynamischen Route-Parametern und dem `useParams` Hook.

## Hintergrund

React Router unterstützt **dynamische Segmente** in Route-Pfaden mit der `:param`-Syntax (z.B. `/post/:id`). Innerhalb der gerouteten Component kannst du mit dem `useParams()` Hook auf diese Parameter zugreifen, der ein Objekt mit Schlüssel-Wert-Paaren zurückgibt.

Die `Link` Component von React Router erstellt einen klickbaren Link, der zu einer neuen Route navigiert, ohne die Seite komplett neu zu laden, und so die SPA-Erfahrung flüssig hält.

## Aufgabe 1: PostDetailsPage erstellen

Erstelle `src/components/pages/PostDetailsPage.jsx`.

### Schritt 1: Imports

Importiere `useParams` aus `react-router`, `useContext` aus `react` und `PostsContext`.

```jsx
import { useParams } from "react-router";
import { useContext } from "react";
import { PostsContext } from "../PostsContext";
import Post from "../components/Post";
```

### Schritt 2: Beitrag anhand der URL finden und rendern

Verwende `useContext(PostsContext)`, um `posts` zu erhalten. Verwende `useParams()`, um die `id` aus der URL zu erhalten. Finde den passenden Beitrag mit `posts.find()`.

```jsx
export default function PostDetailsPage() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

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
```

## Aufgabe 2: Route hinzufügen

Öffne `src/App.jsx`.

Importiere `PostDetailsPage`.

```jsx
import PostDetailsPage from './pages/PostDetailsPage';
```

Füge eine neue Route innerhalb von `<Routes>` hinzu:

```jsx
<Route path="/posts/:id" element={<PostDetailsPage />} />
```

## Aufgabe 3: PostList zu einer Link-Liste umbauen

### Schritt 1: Link importieren

Öffne `src/components/PostList.jsx`.

Importiere `Link` aus `react-router`.

```jsx
import { Link } from "react-router";
```

### Schritt 2: Links statt Post-Components rendern

Anstatt die vollständige `Post` Component zu rendern, rendere jeden Beitrag als klickbaren `Link` zu `/post/${post.id}`. Zeige den Beitragstitel (fett), Autor und Stimmenzahl im Link-Text.

```jsx
{filteredPosts.map((post) => (
  <li key={post.id} className="PostList-Item">
    <Link to={`/posts/${post.id}`}>
      <strong>{post.title}</strong> von {post.author} - Stimmen: {post.votes}
    </Link>
  </li>
))}
```

### Schritt 3: Styling anpassen

Öffne `src/components/PostList.css`.

Füge Styling für die Links innerhalb von `.PostList-Item` hinzu.

```css
.PostList-Item a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 1em;
  border: 1px solid var(--color-grey);
  border-radius: 1em;
}

.PostList-Item a:hover {
  background: var(--color-grey);
}
```
