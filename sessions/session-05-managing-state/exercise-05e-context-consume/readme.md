[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung E**

# Context konsumieren mit useContext

In der vorherigen Übung hast du einen `PostsContext` erstellt und über einen Provider bereitgestellt. Die Components nutzen die Daten aber noch über Props. In dieser Übung wirst du den `useContext` Hook verwenden, um die Daten direkt aus dem Context auszulesen: und das Prop Drilling zu entfernen.

## Der useContext Hook

`useContext` ist ein React Hook, der den aktuellen Wert eines Context ausliest:

```jsx
import { useContext } from 'react';
import { PostsContext } from '../PostsContext';

const { posts, createPost, updatePost, deletePost } = useContext(PostsContext);
```

Jedes Component, das innerhalb des Providers liegt, kann mit `useContext` auf die bereitgestellten Daten zugreifen: egal wie tief es im Component-Baum verschachtelt ist.

## Aufgabe 1: PostList auf Context umstellen

### Schritt 1: useContext und PostsContext importieren

Öffne die Datei `src/components/PostList.jsx`.

Importiere `useContext` aus React und den `PostsContext`:

```jsx
import { useState, useContext } from 'react';
import { PostsContext } from '../PostsContext';
```

### Schritt 2: posts aus dem Context auslesen

Lies `posts` mit `useContext` aus dem Context aus:

```jsx
export default function PostList() {
  const { posts } = useContext(PostsContext);
  const [searchTerm, setSearchTerm] = useState('');
```

Entferne `posts`, `onUpdatePost` und `onDeletePost` aus den Props. `PostList` braucht keine Props mehr.

### Schritt 3: Callback-Props von Post entfernen

`PostList` muss `onUpdatePost` und `onDeletePost` nicht mehr an `Post` weiterreichen. Entferne diese Props aus dem `<Post>`-Element:

```jsx
<Post
  id={post.id}
  title={post.title}
  author={post.author}
  date={post.date}
  summary={post.summary}
  votes={post.votes}
/>
```

## Aufgabe 2: Post auf Context umstellen

### Schritt 1: useContext und PostsContext importieren

Öffne die Datei `src/components/Post.jsx`.

Importiere `useContext` und `PostsContext`:

```jsx
import { useState, useContext } from 'react';
import { PostsContext } from '../PostsContext';
```

### Schritt 2: Funktionen aus dem Context auslesen

Lies `updatePost` und `deletePost` aus dem Context aus:

```jsx
const { updatePost, deletePost } = useContext(PostsContext);
```

Entferne `onUpdatePost` und `onDeletePost` aus den destrukturierten Props:

```jsx
export default function Post({ id, title, author, date, summary, votes }) {
```

### Schritt 3: Handler aktualisieren

Aktualisiere die Handler-Funktionen, damit sie die Context-Funktionen direkt aufrufen:

```jsx
function handleUpvote() {
  updatePost(id, { votes: votes + 1 });
}

function handleDownvote() {
  updatePost(id, { votes: votes - 1 });
}

function handleDelete() {
  deletePost(id);
}
```

## Aufgabe 3: PostForm auf Context umstellen

### Schritt 1: useContext und PostsContext importieren

Öffne die Datei `src/components/PostForm.jsx`.

```jsx
import { useContext } from 'react';
import { PostsContext } from '../PostsContext';
```

### Schritt 2: createPost aus dem Context auslesen

Lies `createPost` aus dem Context aus und entferne die `onCreatePost`-Prop:

```jsx
export default function PostForm() {
  const { createPost } = useContext(PostsContext);

  function handleFormAction(formData) {
    const fields = Object.fromEntries(formData);
    createPost(fields);
  }
```

## Aufgabe 4: Props in App aufräumen

### Schritt 1: Props entfernen

Öffne die Datei `src/App.jsx`.

Da `PostList` und `PostForm` ihre Daten jetzt über Context beziehen, können die Props entfernt werden:

```jsx
<PostsContext.Provider value={{ posts, createPost, updatePost, deletePost }}>
  <div className="App">
    <Header />
    <PostList />
    <PostForm />
  </div>
</PostsContext.Provider>
```