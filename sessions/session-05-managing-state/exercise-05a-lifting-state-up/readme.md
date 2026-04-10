[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung A**

# Stimmen in gemeinsamen State heben

In dieser Übung lernst du "Lifting State up" kennen. Derzeit verwaltet jedes `Post` Component seinen eigenen `votes`-Zähler mit lokalem State. Das Problem ist, dass das Eltern-Component (`App`) keine Ahnung hat, wie viele Stimmen jeder Beitrag hat: die Daten sind in jedem Kind-Component gefangen. Du wirst die Stimmen in das gemeinsame `posts`-Array heben, damit die Daten an einem Ort liegen.

## Aufgabe: Vote-State von Post in das posts-Array verschieben

### Schritt 1: Den aktuellen Code verstehen

Öffne `src/components/Post.jsx` und beachte, dass die Stimmen lokal verwaltet werden:

```jsx
const [votes, setVotes] = useState(0);
```

Das bedeutet, jeder Post verfolgt seinen eigenen Stimmenstand unabhängig. Wenn das Eltern-Component die Liste neu rendert, werden die Stimmen zurückgesetzt, weil sie nicht Teil der gemeinsamen `posts`-Daten sind.

### Schritt 2: Eine `votes`-Eigenschaft zu jedem Post in initialPosts hinzufügen

Öffne `src/App.jsx`. Das `initialPosts`-Array enthält kein `votes`-Feld. Füge `votes: 0` zu jedem Post-Objekt hinzu:

```jsx
const initialPosts = [
  {
    id: '8bbb404c41c',
    title: 'Mein erster Beitrag',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'Ein kurzer überblick über meine erste Erfahrung.',
    votes: 0,
  },
  {
    id: 'bbb404c41cd',
    title: 'Zweiter Beitrag',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details zum zweiten Erlebnis und seinen Auswirkungen.',
    votes: 0,
  },
  {
    id: '404c41cd100',
    title: 'Dritter Beitrag',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Erkenntnisse und Fazit aus der dritten Diskussion.',
    votes: 0,
  },
];
```

### Schritt 3: `votes` durch PostList an Post weitergeben

Öffne `src/components/PostList.jsx`. Derzeit werden `title`, `author`, `date` und `summary` an jedes `<Post>` übergeben. Füge `id` und `votes` hinzu:

```jsx
<Post
  id={post.id}
  title={post.title}
  author={post.author}
  date={post.date}
  summary={post.summary}
  votes={post.votes}
/>
```

### Schritt 4: `votes` als Prop in Post empfangen

Öffne `src/components/Post.jsx`. Ändere das Component so, dass es `votes` aus Props empfängt anstatt lokalen State zu erstellen:

1. Füge `id` und `votes` zu den destrukturierten Props hinzu:

```jsx
export default function Post({ id, title, date, author, summary, votes }) {
```

2. **Entferne** die lokale State-Zeile:

```jsx
// LOESCHE diese Zeile:
const [votes, setVotes] = useState(0);
```

An diesem Punkt werden die Stimmen korrekt angezeigt, aber das Klicken auf Upvote/Downvote funktioniert nicht mehr, weil es kein `setVotes` mehr gibt. Das ist erwartet. Du wirst die Aktualisierungslogik in der nächsten Übung verdrahten.

### Schritt 5: Die Vote-Handler vorerst deaktivieren

Da die Stimmen jetzt aus Props kommen und es noch keinen Aktualisierungsmechanismus gibt, aktualisiere die Handler zu leeren Platzhaltern, damit die App nicht abstuerzt:

```jsx
function handleUpvote() {
  // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
}

function handleDownvote() {
  // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
}
```