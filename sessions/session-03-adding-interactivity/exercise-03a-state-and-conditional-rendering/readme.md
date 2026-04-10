[Zurück zur Session-Übersicht](../readme.md)

**Session 03 - Übung A**

# Mehr lesen

In dieser Übung wirst du eine "Mehr lesen"-Funktion zu den Blogbeiträgen hinzufügen. Du lernst, wie du den `useState` Hook verwendest, um zu verfolgen, ob die Zusammenfassung eines Beitrags sichtbar ist, und wie du Inhalte in JSX bedingt rendern kannst.

## useState verstehen

Der `useState` Hook ermöglicht es einer Komponente, sich Informationen zwischen Rendervorgängen zu "merken". Du rufst ihn am Anfang deiner Komponentenfunktion mit einem Anfangswert auf, und er gibt ein Array mit zwei Elementen zurück:

```jsx
const [stateVariable, setStateVariable] = useState(initialValue);
```

- `stateVariable` enthält den aktuellen Wert.
- `setStateVariable` ist eine Funktion, die du aufrufst, um den Wert zu aktualisieren und ein erneutes Rendern auszulösen.

Dies verwendet **Array-Destrukturierung**: du wählst die Namen selbst, aber die Konvention ist `[something, setSomething]`.

## Bedingtes Rendern mit `&&` verstehen

In JSX rendert `{condition && <element>}` das Element nur, wenn die Bedingung `true` ist. Wenn die Bedingung `false` ist, wird nichts gerendert. React überspringt einfach `false`-Werte in der JSX-Ausgabe.

```jsx
{
  showMore && <p>Dieser Absatz erscheint nur, wenn showMore true ist.</p>;
}
```

Dieses Muster ist ideal, wenn du ein UI-Element basierend auf einer booleschen State-Variable **ein- oder ausblenden** möchtest.

## Aufgabe: Zusammenfassung mit bedingtem Rendern hinzufügen

### Schritt 1: Zusammenfassungsdaten hinzufügen

Öffne `src/App.jsx`. Das `posts`-Array hat derzeit `id`, `title`, `author` und `date`. Füge jedem Post-Objekt ein `summary`-Feld hinzu:

```jsx
const posts = [
  {
    id: '8bbb404c41c',
    title: 'Mein erster Beitrag',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'Ein kurzer Überblick über meine erste Erfahrung.',
  },
  {
    id: 'bbb404c41cd',
    title: 'Zweiter Beitrag',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details zum zweiten Erlebnis und seinen Auswirkungen.',
  },
  {
    id: '404c41cd100',
    title: 'Dritter Beitrag',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Erkenntnisse und Schlussfolgerungen aus der dritten Diskussion.',
  },
];
```

### Schritt 2: Zusammenfassung durch PostList weiterreichen

Öffne `src/components/PostList.jsx`. Die `<Post>`-Komponente erhält derzeit `title`, `author` und `date`. Füge auch `summary` hinzu:

```jsx
<Post
  title={post.title}
  author={post.author}
  date={post.date}
  summary={post.summary}
/>
```

### Schritt 3: State zu Post hinzufügen

Öffne `src/components/Post.jsx`. Importiere zunächst `useState` aus React am Anfang der Datei:

```jsx
import { useState } from 'react';
```

Füge dann `summary` zu den destrukturierten Props hinzu und erstelle eine `showMore` State-Variable innerhalb der Komponente:

```jsx
export default function Post({ title, date, author, summary }) {
  const [showMore, setShowMore] = useState(false);

  return (
    // ...
  );
}
```

Der Anfangswert ist `false`, da die Zusammenfassung standardmäßig ausgeblendet sein soll.

### Schritt 4: Zusammenfassung bedingt rendern

Füge innerhalb des `Post-content`-Divs, nach dem `Post-button`-Div, einen bedingten Rendering-Ausdruck mit `&&` hinzu:

```jsx
{showMore && <p>{summary}</p>}
```

Dein vollständiger Return-Ausdruck sollte so aussehen:

```jsx
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
      {showMore && <p>{summary}</p>}
    </div>
  </article>
);
```

Im Moment passiert beim Klicken auf den Button noch nichts: der `showMore` State ist immer `false`. Du wirst den Button in der nächsten Übung verknüpfen. Um zu überprüfen, ob dein bedingtes Rendern funktioniert, ändere den Anfangszustand vorübergehend auf `true`:

```jsx
const [showMore, setShowMore] = useState(true);
```