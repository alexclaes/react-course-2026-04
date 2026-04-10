[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung D**

# Daten an den Server senden

## Ziel

Neue Beiträge an den Server senden und optimistische Updates mit dem `useOptimistic`-Hook einfuehren.

## Hintergrund

Aktuell wird ein neuer Beitrag nur im lokalen State gespeichert: beim Neuladen der Seite ist er weg, weil er nie an den Server gesendet wurde.

Wir wollen zwei Dinge gleichzeitig:

1. **Sofortiges Feedback**: der neue Beitrag soll sofort in der Liste erscheinen, ohne auf den Server zu warten.
2. **Persistenz**: der Beitrag soll in der Datenbank gespeichert werden und ein Neuladen überleben.

Dieses Muster nennt man **Optimistic Update**: Wir gehen davon aus, dass der Server-Aufruf erfolgreich sein wird, und aktualisieren das UI sofort. Falls der Aufruf fehlschlägt, kann React die Änderung automatisch zurücknehmen.

React 19 bietet den `useOptimistic`-Hook genau für dieses Muster.

## Aufgabe: `createPost` mit dem Server verbinden

### Schritt 1: `fetchCreatePost` und `useOptimistic` importieren

Öffne `src/App.jsx`.

Füge `fetchCreatePost` zum Import aus `api.js` hinzu:

```jsx
import { fetchPosts, fetchCreatePost } from './api.js';
```

Füge `useOptimistic` zum React-Import hinzu:

```jsx
import { useState, useEffect, useOptimistic } from 'react';
```

### Schritt 2: Optimistischen State erstellen

Füge nach dem `useState` für Posts einen `useOptimistic`-Hook hinzu:

```jsx
const [posts, setPosts] = useState([]);
const [optimisticPosts, setOptimisticPosts] = useOptimistic(posts);
```

**Wie `useOptimistic` funktioniert:**

- `optimisticPosts` spiegelt standardmässig `posts` wider.
- Wenn du `setOptimisticPosts(neuerWert)` aufrufst, zeigt es dem Benutzer temporär `neuerWert`.
- Wenn die asynchrone Aktion abgeschlossen ist, kehrt `optimisticPosts` automatisch zum echten `posts`-State zurück.

### Schritt 3: `createPost` asynchron machen

Ändere `createPost` zu einer `async`-Funktion mit optimistischem Update:

```jsx
async function createPost(newPost) {
  setOptimisticPosts([...posts, { id: uid(), votes: 0, ...newPost }]);
  await fetchCreatePost(newPost);
  loadPosts();
}
```

### Schritt 4: Provider-Value anpassen

Ändere den Context-Provider, damit er `optimisticPosts` statt `posts` an die Kinder weitergibt:

```jsx
<PostsContext.Provider value={{ posts: optimisticPosts, createPost, updatePost, deletePost }}>
```

Alle Komponenten, die `useContext(PostsContext)` verwenden, bekommen jetzt automatisch die optimistischen Daten: ohne weitere Änderungen in den Kinder-Komponenten.

## Hinweise

- `uid()` erzeugt eine temporäre ID für das optimistische Update. Nach `loadPosts()` wird sie durch die echte Server-ID ersetzt.
- `updatePost` und `deletePost` ändern weiterhin nur den lokalen State. Votes und Löschen gehen beim Neuladen noch verloren: das wird in der nächsten Übung behoben.
