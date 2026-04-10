[Zurück zur Session-Übersicht](../readme.md)

**Session 01 - Übung E**

# Die Post-Component erstellen

In dieser Übung wirst du eine zweite Component erstellen: Einen `Post`, der eine Nachricht auf der Message Board anzeigt.

## Aufgabe: Die `Post`-Component erstellen

### Schritt 1: Eine neue Datei für die Component erstellen

Erstelle eine neue Datei namens `Post.jsx` im `components`-Verzeichnis:

```
src/components/Post.jsx
```

### Schritt 2: Den Component-Code schreiben

Die `Post`-Component soll folgenden Inhalt rendern:

- Einen Titel: "Mein erster Beitrag"
- Den Autor: "von Alex" (verwende deinen eigenen Namen)
- Das Datum: "am 2024-06-19"
- Einen Button mit der Beschriftung: "Mehr lesen"

Hier ist eine vorgeschlagene Struktur:

```jsx
export default function Post() {
  return (
    <article className="Post">
      <h2 className="Post-title">Mein erster Beitrag</h2>
      <div className="Post-content">
        <span className="Post-author">von Alex</span>
        <span className="Post-date">
          am <time>2024-06-19</time>
        </span>
        <div className="Post-button">
          <button>Mehr lesen</button>
        </div>
      </div>
    </article>
  );
}
```

### Schritt 3: Die `Post`-Component zur `App`-Component hinzufügen

Öffne `src/App.jsx` und importiere die `Post`-Component:

```jsx
import Post from './components/Post';
```

Rendere die `Post`-Component unterhalb des `Header`:

```jsx
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Post />
    </div>
  );
}
```
