[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung A**

# Posts State

In dieser Übung wirst du das statische Posts-Array in der Message Board-App in eine React State-Variable umwandeln, indem du den `useState` Hook verwendest. Dies ist der erste Schritt, um die Beitragsliste dynamisch zu machen, damit wir später neue Beiträge hinzufügen können.

## Aufgabe 1: Das Posts-Array in den State verschieben

### Schritt 1: Den `useState` Hook importieren

Öffne die Datei `App.jsx`:

```
src/App.jsx
```

Importiere den `useState` Hook von React am Anfang der Datei:

```jsx
import { useState } from 'react';
```

### Schritt 2: Das Posts-Array umbenennen

Benenne das `posts`-Array in `initialPosts` um. Dadurch wird deutlich, dass dieses Array nur als Anfangswert für unseren State verwendet wird:

```jsx
const initialPosts = [
  {
    id: '8bbb404c41c',
    title: 'Mein erster Beitrag',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'Ein kurzer Überblick über meine erste Erfahrung.',
  },
  // ... weitere Beiträge
];
```

### Schritt 3: Eine State-Variable erstellen

Verwende innerhalb der `App` Component-Funktion `useState`, um eine State-Variable zu erstellen, die mit `initialPosts` initialisiert wird:

```jsx
export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}
```
