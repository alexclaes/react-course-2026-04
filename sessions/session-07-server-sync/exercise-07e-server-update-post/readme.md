[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung E**

# Voting mit dem Server synchronisieren

## Ziel

Die `updatePost`-Funktion mit dem Server verbinden, sodass Votes in der Datenbank gespeichert werden.

## Hintergrund

Voting aktualisiert aktuell nur den lokalen State: beim Neuladen der Seite werden die Stimmenzahlen zurückgesetzt. In dieser Übung wendest du dasselbe optimistische Muster aus Übung D auf `updatePost` an.

**Warum `startTransition`?** Die `createPost`-Funktion funktioniert mit `useOptimistic`, weil sie aus einer Form-Action aufgerufen wird: React wickelt Form-Actions automatisch in eine Transition. `updatePost` wird aber aus einem Button-Klick aufgerufen, daher müssen wir es manuell in `startTransition` einwickeln. Das teilt React mit: "Diese Aktualisierung kann im Hintergrund passieren."

## Aufgabe: `updatePost` mit dem Server verbinden

### Schritt 1: Imports ergänzen

Öffne `src/App.jsx`.

Füge `fetchUpdatePost` zum Import aus `api.js` hinzu:

```jsx
import { fetchPosts, fetchCreatePost, fetchUpdatePost } from './api.js';
```

Füge `startTransition` zum React-Import hinzu:

```jsx
import { useState, useEffect, useOptimistic, startTransition } from 'react';
```

### Schritt 2: `updatePost` asynchron machen

Ersetze die aktuelle `updatePost`-Funktion:

```jsx
function updatePost(id, updatedItem) {
  startTransition(async () => {
    setOptimisticPosts(
      posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
    await fetchUpdatePost(id, updatedItem);
    loadPosts();
  });
}
```

## Hinweise

- `startTransition` ist nötig bei `updatePost`, weil es aus einem Button-Klick aufgerufen wird. `createPost` braucht es nicht, weil es aus einer Form-Action aufgerufen wird, die React automatisch in eine Transition einwickelt.
- `deletePost` ändert weiterhin nur den lokalen State. Gelöschte Beiträge erscheinen nach dem Neuladen wieder: das wird in der nächsten Übung behoben.
