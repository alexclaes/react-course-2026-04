[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung B**

# Einen Beitrag aktualisieren (Upvote und Downvote)

In der vorherigen Übung hast du die `votes`-Daten in das gemeinsame `posts`-Array gehoben. Aber das Klicken auf die Abstimmungs-Buttons bewirkt nichts, weil es keine Möglichkeit gibt, einen Beitrag im State zu aktualisieren. In dieser Übung wirst du eine `updatePost`-Funktion in `App.jsx` schreiben und sie durch Props weiterreichen, damit die Abstimmungs-Buttons wieder funktionieren.
## Aufgabe: Eine updatePost-Funktion erstellen und die Abstimmungs-Buttons verdrahten

### Schritt 1: Den Ausgangscode verstehen

Öffne `src/components/Post.jsx`. Die Vote-Handler sind derzeit leere Platzhalter:

```jsx
function handleUpvote() {
  // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
}

function handleDownvote() {
  // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
}
```

Das Component empfängt `id` und `votes` als Props, hat aber keine Möglichkeit, `App` mitzuteilen, dass die Daten gäendert werden sollen. Du musst eine Callback-Funktion weiterreichen.

### Schritt 2: updatePost in App.jsx erstellen

Öffne `src/App.jsx`. Füge eine `updatePost`-Funktion hinzu, die eine `id` und ein Objekt mit aktualisierten Feldern entgegennimmt und dann den passenden Beitrag im State ersetzt:

```jsx
function updatePost(id, updatedItem) {
  setPosts(
    posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
  );
}
```

Dies verwendet `.map()`, um ein neues Array zu erstellen. für den Beitrag, dessen `id` übereinstimmt, werden die alten Werte übernommen und dann mit den aktualisierten Feldern überschrieben. Alle anderen Beiträge bleiben gleich.

### Schritt 3: updatePost durch PostList weiterreichen

übergib `updatePost` als Prop an `<PostList>`:

```jsx
<PostList posts={posts} onUpdatePost={updatePost} />
```

Öffne dann `src/components/PostList.jsx` und leite es an jedes `<Post>` weiter:

```jsx
export default function PostList({ posts, onUpdatePost }) {
  return (
    <ul className="PostList">
      {posts.map((post) => (
        <li key={post.id} className="PostList-Item">
          <Post
            id={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
            summary={post.summary}
            votes={post.votes}
            onUpdatePost={onUpdatePost}
          />
        </li>
      ))}
    </ul>
  );
}
```

### Schritt 4: Die Vote-Handler in Post.jsx verdrahten

Öffne `src/components/Post.jsx`. Füge `updatePost` zu den destrukturierten Props hinzu:

```jsx
export default function Post({ id, title, date, author, summary, votes, onUpdatePost }) {
```

Aktualisiere dann die Handler, damit sie `updatePost` mit der `id` des Beitrags und dem neuen Stimmenstand aufrufen:

```jsx
function handleUpvote() {
  onUpdatePost(id, { votes: votes + 1 });
}

function handleDownvote() {
  onUpdatePost(id, { votes: votes - 1 });
}
```

Wenn der Benutzer auf Upvote klickt, teilt dies `App` mit, den `votes`-Wert für diesen bestimmten Beitrag durch `votes + 1` zu ersetzen.

