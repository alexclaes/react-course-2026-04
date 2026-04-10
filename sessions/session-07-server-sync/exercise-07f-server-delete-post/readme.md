[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung F**

# Löschen mit dem Server synchronisieren

## Ziel

Die `deletePost`-Funktion mit dem Server verbinden, sodass gelöschte Beiträge dauerhaft aus der Datenbank entfernt werden.

## Hintergrund

Löschen aktualisiert aktuell nur den lokalen State: beim Neuladen der Seite taucht der gelöschte Beitrag wieder auf. In dieser Übung wendest du dasselbe Muster aus Übung D und E auf `deletePost` an.

## Aufgabe: `deletePost` mit dem Server verbinden

### Schritt 1: Import ergänzen

Öffne `src/App.jsx`.

Füge `fetchDeletePost` zum Import aus `api.js` hinzu:

```jsx
import { fetchPosts, fetchCreatePost, fetchUpdatePost, fetchDeletePost } from './api.js';
```

### Schritt 2: `deletePost` asynchron machen

Ersetze die aktuelle `deletePost`-Funktion:

```jsx
function deletePost(id) {
  startTransition(async () => {
    setOptimisticPosts(posts.filter((item) => item.id !== id));
    await fetchDeletePost(id);
    loadPosts();
  });
}
```

## Hinweise

- `startTransition` ist nötig bei `deletePost`, weil es aus einem Button-Klick aufgerufen wird. `createPost` braucht es nicht, weil es aus einer Form-Action aufgerufen wird, die React automatisch in eine Transition einwickelt.

