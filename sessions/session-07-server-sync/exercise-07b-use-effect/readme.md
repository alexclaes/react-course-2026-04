[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung B**

# Beiträge vom Server laden

## Ziel

Beiträge beim Laden der App vom Server abrufen, anstatt fest einprogrammierte Daten zu verwenden.

## Hintergrund

Aktuell verwendet die App `useState` mit einem fest einprogrammierten `initialPosts`-Array. In dieser Übung ersetzt du das durch Daten, die beim Start der App vom Server geladen werden.

Dafür verwendest du den `useEffect`-Hook. Ein Effekt ist Code, der nach dem Rendern ausgefuehrt wird: in diesem Fall, um Daten vom Server abzurufen. Mit einem leeren Dependency-Array `[]` wird der Effekt nur einmal beim ersten Rendern ausgefuehrt.

## Aufgabe: Beiträge beim Mounten der App vom Server laden

### Schritt 1: `useEffect` importieren und `initialPosts` entfernen

Ergänze `useEffect` im React-Import:

```jsx
import { useState, useEffect } from 'react';
```

Entferne das komplette `initialPosts`-Array. Initialisiere den State mit einem leeren Array:

```jsx
const [posts, setPosts] = useState([]);
```

Die Liste ist beim ersten Rendern leer und füllt sich, sobald die Server-Antwort eintrifft.

### Schritt 2: `fetchPosts` importieren

Füge diesen Import am Anfang von `App.jsx` hinzu:

```jsx
import { fetchPosts } from './api.js';
```

### Schritt 3: `loadPosts`-Funktion erstellen

Erstelle innerhalb der `App`-Komponente eine asynchrone Funktion, die alle Beiträge vom Server lädt:

```jsx
async function loadPosts() {
  const response = await fetchPosts();
  const data = await response.json();
  setPosts(data);
}
```

Diese Funktion:
1. Ruft `fetchPosts()` auf, das ein fetch-Promise zurückgibt.
2. Wandelt die Antwort in JSON um.
3. Speichert die Beiträge im State mit `setPosts`.

### Schritt 4: `loadPosts` beim Mounten aufrufen

Füge einen `useEffect` hinzu, der `loadPosts` einmal beim ersten Rendern aufruft:

```jsx
useEffect(() => {
  loadPosts();
}, []);
```

Das leere Dependency-Array `[]` sorgt dafür, dass der Effekt nur einmal ausgefuehrt wird, direkt nach dem ersten Rendern.