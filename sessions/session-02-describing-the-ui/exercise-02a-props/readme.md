[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung A**

# Post Props

In dieser Übung machst du die `Post`-Komponente dynamisch, indem sie **Props** akzeptiert, anstatt fest einprogrammierte Werte darzustellen.

## Aufgabe: Daten über Props an die Post-Komponente übergeben

### Schritt 1: Props in der Post-Komponente akzeptieren

Öffne `src/components/Post.jsx`. Ändere die Funktionssignatur, um die Props `title`, `author` und `date` direkt in der Parameterliste zu **destrukturieren**:

```jsx
export default function Post({ title, author, date }) {
  // ...
}
```

Das ist gleichwertig mit dem Empfang eines einzelnen `props`-Objekts und dem Zugriff auf `props.title`, `props.author` und `props.date`, aber Destrukturierung ist sauberer und in React gebräuchlicher.

### Schritt 2: Props in JSX verwenden

Ersetze die fest einprogrammierten Werte im JSX durch die Prop-Werte. Verwende **geschweifte Klammern** `{}`, um JavaScript-Ausdrücke in JSX einzubetten:

```jsx
export default function Post({ title, author, date }) {
  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-content">
        <span className="Post-author">von {author}</span>
        <span className="Post-date">
          am <time>{date}</time>
        </span>
        <div className="Post-button">
          <button>Mehr lesen</button>
        </div>
      </div>
    </article>
  );
}
```

### Schritt 3: Props von der App-Komponente übergeben

Öffne `src/App.jsx`. übergib die Props `title`, `author` und `date` an die `Post`-Komponente:

```jsx
<Post title="Mein erster Beitrag" author="Alex" date="2024-06-19" />
```

Deine vollständige `App.jsx` sollte so aussehen:

```jsx
import './App.css';
import Header from './components/Header.jsx';
import Post from './components/Post.jsx';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Post title="Mein erster Beitrag" author="Alex" date="2024-06-19" />
    </div>
  );
}
```
