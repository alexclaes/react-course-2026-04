[Zurück zur Session-Übersicht](../readme.md)

**Session 03 - Übung C**

# Stimmenanzeige

In dieser Übung wirst du einen Stimmenzähler zu jedem Beitrag hinzufügen. Dies zeigt, wie eine Komponente mehrere unabhängige State-Teile mit separaten `useState`-Aufrufen verwalten kann.

## Aufgabe 1: Einen Stimmenzähler hinzufügen

### Schritt 1: Einen zweiten useState für Stimmen hinzufügen

Öffne `src/components/Post.jsx`. Die Komponente hat bereits eine `showMore` State-Variable. Füge einen zweiten `useState`-Aufruf hinzu, um die Stimmenanzahl zu verfolgen, initialisiert mit `0`:

```jsx
const [showMore, setShowMore] = useState(false);
const [votes, setVotes] = useState(0);
```

Jeder `useState`-Aufruf ist unabhängig. React verfolgt sie anhand der Reihenfolge, in der sie aufgerufen werden, daher solltest du Hooks immer auf der obersten Ebene deiner Komponente aufrufen.

### Schritt 2: Die Stimmenanzahl anzeigen

Füge ein neues `div` mit dem Klassennamen `Post-votes` zwischen der `Post-title`-Überschrift und dem `Post-content`-Div hinzu. Zeige die aktuelle Stimmenanzahl in einem `<p>`-Tag an:

```jsx
return (
  <article className="Post">
    <h2 className="Post-title">{title}</h2>
    <div className="Post-votes">
      <p>Stimmen: {votes}</p>
    </div>
    <div className="Post-content">{/* ... bestehender Inhalt ... */}</div>
  </article>
);
```

### Schritt 3: Post-votes CSS hinzufügen

Öffne `src/components/Post.css`. Füge Styles für den neuen `Post-votes`-Bereich hinzu:

```css
.Post-votes {
  margin: 0 0 2em 0;
  display: flex;
  align-items: center;
  gap: 1em;
}
```


## Aufgabe 2: Abstimmungsbuttons hinzufügen

### Schritt 1: Handler-Funktionen erstellen

Öffne `src/components/Post.jsx`. Füge zwei Funktionen innerhalb der Komponente hinzu, die den `votes` State aktualisieren:

```jsx
function handleUpvote() {
  setVotes(votes + 1);
}

function handleDownvote() {
  setVotes(votes - 1);
}
```

Platziere diese nach der bestehenden `toggleShowMore`-Funktion.

### Schritt 2: Daumen-Icons importieren

Füge Imports für die Daumen-Icons aus `react-icons` am Anfang der Datei hinzu:

```jsx
import { MdThumbUp } from 'react-icons/md';
import { MdThumbDown } from 'react-icons/md';
```

### Schritt 3: Abstimmungsbuttons zum Template hinzufügen

Füge innerhalb des `Post-votes`-Divs zwei `<button>`-Elemente vor dem bestehenden `<p>`-Tag hinzu. Verknüpfe die Handler-Funktionen über die `onClick`-Prop:

```jsx
<div className="Post-votes">
  <button onClick={handleUpvote}>
    Hochwählen <MdThumbUp /> 
  </button>
  <button onClick={handleDownvote}>
    Runterwählen <MdThumbDown /> 
  </button>
  <p>Stimmen: {votes}</p>
</div>
```

Beachte, dass wir `handleUpvote` und `handleDownvote` als Referenzen übergeben: wir schreiben **nicht** `handleUpvote()` mit Klammern. Das Schreiben von Klammern würde die Funktion sofort während des Renderns aufrufen, anstatt auf einen Klick zu warten.
