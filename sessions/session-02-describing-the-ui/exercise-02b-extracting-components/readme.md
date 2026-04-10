[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung B**

# PostMeta-Komponente

In dieser Übung extrahierst du die Anzeige von Autor und Datum in eine neue `PostMeta`-Komponente und erstellst eine eigene CSS-Datei dafür.

## Aufgabe: Eine PostMeta-Komponente extrahieren

### Schritt 1: Identifiziere, was extrahiert werden soll

Schau dir `src/components/Post.jsx` an. Die Autor- und Datum-Spans bilden eine logische Gruppe, die eine eigene Komponente sein kann. Sie in eine `PostMeta`-Komponente zu extrahieren, macht den Code organisierter und wiederverwendbar.

### Schritt 2: Die PostMeta-Komponente erstellen

Erstelle eine neue Datei `src/components/PostMeta.jsx`. Diese Komponente soll `author` und `date` als Props akzeptieren und sie rendern:

```jsx
import './PostMeta.css';

export default function PostMeta({ author, date }) {
  return (
    <div className="PostMeta">
      <span className="PostMeta-author">von {author}</span>
      <span className="PostMeta-date">
        am <time>{date}</time>
      </span>
    </div>
  );
}
```

### Schritt 3: Die PostMeta-CSS-Datei erstellen

Erstelle eine neue Datei `src/components/PostMeta.css` mit Styles für die neue Komponente:

```css
.PostMeta {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
```

### Schritt 4: Die Post-Komponente aktualisieren

Öffne `src/components/Post.jsx`. Importiere die neue `PostMeta`-Komponente und ersetze die Autor-/Datum-Spans damit. Leite die Props `author` und `date` von `Post` an `PostMeta` weiter:

```jsx
import './Post.css';
import PostMeta from './PostMeta.jsx';

export default function Post({ title, author, date }) {
  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-content">
        <div className="Post-meta">
          <PostMeta author={author} date={date} />
        </div>
        <div className="Post-button">
          <button>Mehr lesen</button>
        </div>
      </div>
    </article>
  );
}
```

### Schritt 5: Post.css aktualisieren

Da sich das Layout gäendert hat (Autor und Datum sind jetzt in einem einzelnen `Post-meta`-Div statt in separaten Grid-Bereichen), aktualisiere `src/components/Post.css`, um die neue Struktur widerzuspiegeln:

```css
.Post-content {
  display: grid;
  grid-template-areas: 'meta button';
  gap: 0.5em;
}

.Post-meta {
  grid-area: meta;
}
```

Entferne die alten `.Post-author` und `.Post-date` Grid-Area-Regeln und ersetze sie durch die obige `.Post-meta`-Regel.
