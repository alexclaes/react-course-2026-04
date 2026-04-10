[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung E**

# Beitragsliste

In dieser Übung erstellst du eine `PostList`-Komponente, die mehrere Beiträge aus einem Array von Daten mithilfe der `.map()`-Methode rendert.

## Aufgabe: Eine Liste von Beiträgen rendern

### Schritt 1: Ein Beitrags-Array definieren

Öffne `src/App.jsx`. Definiere ein Array von Beitragsobjekten oberhalb der `App`-Komponente. Jedes Objekt sollte eine eindeutige `id`, `title`, `author` und `date` haben:

```jsx
const posts = [
  { id: '8bbb404c41c', title: 'Mein erster Beitrag', author: 'Alex', date: '2024-06-19' },
  { id: 'bbb404c41cd', title: 'Zweiter Beitrag', author: 'Casey', date: '2024-06-20' },
  { id: '404c41cd100', title: 'Dritter Beitrag', author: 'Jordan', date: '2024-06-21' },
];
```

### Schritt 2: Die PostList-Komponente erstellen

Erstelle eine neue Datei `src/components/PostList.jsx`. Diese Komponente empfängt ein `posts`-Array als Prop und rendert jeden Beitrag mit der `.map()`-Methode:

```jsx
import './PostList.css';
import Post from './Post.jsx';

export default function PostList({ posts }) {
  return (
    <ul className="PostList">
      {posts.map((post) => (
        <li key={post.id} className="PostList-Item">
          <Post title={post.title} author={post.author} date={post.date} />
        </li>
      ))}
    </ul>
  );
}
```

Die `.map()`-Methode wandelt jedes Objekt im Array in ein JSX-Element um. für jeden Beitrag wird eine `<Post />`-Komponente innerhalb eines `<li>` gerendert.

### Schritt 3: Die Key Prop verstehen

Beachte `key={post.id}` an jedem `<li>`. React benötigt eine eindeutige `key` Prop an jedem Element in einer Liste, damit es effizient nachverfolgen kann, welche Elemente sich gäendert haben, hinzugefügt oder entfernt wurden. Verwende immer einen stabilen, eindeutigen Bezeichner (wie eine ID) anstelle des Array-Index.

### Schritt 4: PostList-CSS erstellen

Erstelle eine neue Datei `src/components/PostList.css`:

```css
.PostList {
  list-style: none;
  margin: 0;
  padding: 0;
}

.PostList-Item {
  margin: 0 0 2em 0;
}
```

### Schritt 5: PostList in App verwenden

Aktualisiere `src/App.jsx`, um `PostList` anstelle des einzelnen `Post` zu importieren und zu rendern. übergib das `posts`-Array als Prop:

```jsx
import './App.css';
import Header from './components/Header.jsx';
import PostList from './components/PostList.jsx';

const posts = [
  { id: '8bbb404c41c', title: 'Mein erster Beitrag', author: 'Alex', date: '2024-06-19' },
  { id: 'bbb404c41cd', title: 'Zweiter Beitrag', author: 'Casey', date: '2024-06-20' },
  { id: '404c41cd100', title: 'Dritter Beitrag', author: 'Jordan', date: '2024-06-21' },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}
```
