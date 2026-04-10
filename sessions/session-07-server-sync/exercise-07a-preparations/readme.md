[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung A**

# API-Einrichtung

## Ziel

Erstelle eine `src/api.js`-Datei mit Hilfsfunktionen für die Server-Kommunikation und starte den lokalen Express-Server.

## Hintergrund

Bisher speichert die App alle Beiträge im lokalen State. Ab jetzt werden die Daten über einen lokalen Express-Server gelesen und geschrieben, der sie in einer SQLite-Datenbank ablegt.

Die gesamte Server-Kommunikation wird in einer eigenen Datei `api.js` zentralisiert. Die dort definierten Funktionen geben Promises zurück und werden in späteren Übungen aus `App.jsx` heraus aufgerufen.

## Aufgabe: API-Datei anlegen und Server starten

### Schritt 1: Server starten

Öffne ein separates Terminal und starte den Server:

```bash
cd server
npm install
npm run dev
```

Der Server läuft auf `http://localhost:3001`. Prüfe, ob er funktioniert, indem du `http://localhost:3001/api/posts` im Browser öffnest: du solltest eine JSON-Liste mit drei Beiträgen sehen.

### Schritt 2: API-Datei erstellen

Erstelle eine neue Datei `src/api.js` mit folgendem Inhalt:

```js
const API_URL = 'http://localhost:3001/api';

export function fetchPosts() {
  return fetch(`${API_URL}/posts`);
}

export function fetchPostById(id) {
  return fetch(`${API_URL}/posts/${id}`);
}

export function fetchCreatePost(post) {
  return fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}

export function fetchUpdatePost(id, post) {
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}

export function fetchDeletePost(id) {
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });
}
```