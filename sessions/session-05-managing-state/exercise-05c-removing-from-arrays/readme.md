[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung C**

# Beitrag löschen

In dieser Übung fügst du die Möglichkeit hinzu, Beiträge von der Message Board zu löschen. Damit wird das CRUD-Muster vervollständigt: **C**reate (Übung 04d), **R**ead (immer vorhanden), **U**pdate (Übung 05c) und jetzt **D**elete.

## Unveränderliches löschen mit Array.filter()

In der vorherigen Übung hast du `.map()` verwendet, um Elemente in einem Array zu aktualisieren, ohne den State zu mutieren. Jetzt wirst du `.filter()` verwenden, um Elemente zu entfernen. Die `.filter()`-Methode erstellt ein **neues Array**, das nur die Elemente enthält, die den Test bestehen. Elemente, die nicht übereinstimmen, werden aus dem neuen Array ausgeschlossen: sie werden effektiv gelöscht.

- `.map()` **transformiert** Elemente: du erhältst die gleiche Anzahl von Elementen zurück, aber einige können gäendert sein
- `.filter()` **entfernt** Elemente: du erhältst weniger Elemente zurück (oder die gleiche Anzahl, wenn nichts herausgefiltert wird)

Beide Methoden geben ein neues Array zurück, ohne das Original zu mutieren, was genau das ist, was React beim Aktualisieren von State erfordert.

## Aufgabe 1: Die `deletePost`-Funktion erstellen

### Schritt 1: `deletePost` zu App hinzufügen

Öffne die Datei `App.jsx`:

```
src/App.jsx
```

Füge im `App` Component eine `deletePost`-Funktion hinzu. Diese Funktion nimmt eine `id` entgegen und verwendet `.filter()`, um ein neues Array zu erstellen, das den Beitrag mit dieser ID ausschliesst:

```jsx
function deletePost(id) {
  setPosts(posts.filter((item) => item.id !== id));
}
```

Der Filter-Test `item.id !== id` gibt `true` für jeden Beitrag zurück, _ausser_ dem, den wir löschen wollen. Das resultierende Array enthält also alle Beiträge minus den gelöschten.

## Aufgabe 2: `deletePost` an Post weitergeben

### Schritt 1: `deletePost` durch PostList weiterreichen

übergib die `deletePost`-Funktion als Prop an `PostList`:

```jsx
<PostList posts={posts} onUpdatePost={updatePost} onDeletePost={deletePost} />
```

### Schritt 2: PostList aktualisieren, um `deletePost` weiterzuleiten

Öffne `PostList.jsx` und füge `deletePost` zu den destrukturierten Props hinzu, dann übergib es an jedes `Post` Component:

```jsx
export default function PostList({ posts, onUpdatePost, onDeletePost }) {
```

Füge die Prop zum `Post` Component hinzu:

```jsx
<Post
  id={post.id}
  title={post.title}
  author={post.author}
  date={post.date}
  summary={post.summary}
  votes={post.votes}
  onUpdatePost={onUpdatePost}
  onDeletePost={onDeletePost}
/>
```

### Schritt 3: Einen löschen-Button zu Post hinzufügen

Öffne `Post.jsx` und importiere das `MdDelete`-Icon:

```jsx
import { MdDelete } from 'react-icons/md';
```

Füge `deletePost` zu den destrukturierten Props hinzu:

```jsx
export default function Post({
  id,
  title,
  date,
  author,
  summary,
  votes,
  onUpdatePost,
  onDeletePost,
}) {
```

Füge einen `onClick` Handler für den Lösche-Button hinzu:

```jsx
function handleDelete(){
  onDeletePost(id)
}
```


Füge einen löschen-Button in das JSX des Components ein. Ein guter Platz ist neben den bestehenden Abstimmungs-Buttons oder am Ende des Beitrags:

```jsx
<IconButton onClick={handleDelete} icon={<MdDelete />}>
  löschen
</IconButton>
```
