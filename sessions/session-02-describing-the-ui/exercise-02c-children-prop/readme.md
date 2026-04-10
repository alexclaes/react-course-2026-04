[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung C**

# IconButton-Komponente

In dieser Übung erstellst du eine `IconButton`-Komponente, die die spezielle `children` Prop verwendet, um ihren Inhalt darzustellen.

## Aufgabe: Eine IconButton-Komponente mit Children erstellen

### Schritt 1: Die Children Prop verstehen

In React ist die `children` Prop eine spezielle Prop, die den Inhalt enthält, den du **zwischen die Öffnenden und schliessenden Tags** einer Komponente setzt. Zum Beispiel:

```jsx
<IconButton>Mehr lesen</IconButton>
```

Hier wird der Text `"Mehr lesen"` als `children` an die `IconButton`-Komponente übergeben.

### Schritt 2: Die IconButton-Komponente erstellen

Erstelle eine neue Datei `src/components/IconButton.jsx`. Die Komponente soll `children` als Prop akzeptieren und innerhalb eines `<button>` rendern:

```jsx
import './IconButton.css';

export default function IconButton({ children }) {
  return <button className="IconButton">{children}</button>;
}
```

### Schritt 3: Die IconButton-CSS-Datei erstellen

Erstelle eine neue Datei `src/components/IconButton.css`. Verschiebe die Button-Styles von `Post.css` in diese neue Datei und aktualisiere sie für den neuen Klassennamen:

```css
.IconButton {
  background: var(--color-primary);
  border-radius: 0.5em;
  border: none;
  padding: 1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.8em;
}
```

Entferne die `.Post-button button`-Styles aus `Post.css`, da sie in `IconButton.css` verschoben wurden.

### Schritt 4: IconButton in Post verwenden

Öffne `src/components/Post.jsx`. Importiere die `IconButton`-Komponente und ersetze das einfache `<button>`-Element:

```jsx
import './Post.css';
import PostMeta from './PostMeta.jsx';
import IconButton from './IconButton.jsx';

export default function Post({ title, author, date }) {
  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-content">
        <div className="Post-meta">
          <PostMeta author={author} date={date} />
        </div>
        <div className="Post-button">
          <IconButton>Mehr lesen</IconButton>
        </div>
      </div>
    </article>
  );
}
```