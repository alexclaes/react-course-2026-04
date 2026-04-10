[Zurück zur Session-Übersicht](../readme.md)

# Übung E: Programmatische Navigation

## Ziel

Verwende den `useNavigate` Hook, um den Benutzer nach dem Absenden eines neuen Beitrags automatisch zur Beitragsübersicht weiterzuleiten.

## Hintergrund

Manchmal muss man den Benutzer **programmatisch** zu einer anderen Seite navigieren: also als Ergebnis einer Aktion (wie dem Absenden eines Formulars) und nicht durch Klicken auf einen Link. Der `useNavigate` Hook von React Router gibt eine `navigate`-Funktion zurück, die du mit einem Pfad aufrufen kannst, um die Navigation auszulösen.

## Aufgabe: Nach dem Absenden zur Beitragsübersicht navigieren

### Schritt 1: useNavigate importieren

Öffne `src/components/PostForm.jsx`.

Importiere `useNavigate` aus `react-router`.

```jsx
import { useNavigate } from "react-router";
```

### Schritt 2: navigate-Funktion erstellen

Rufe `useNavigate()` auf der obersten Ebene der Component auf, um die `navigate`-Funktion zu erhalten.

```jsx
export default function PostForm() {
  const { createPost } = useContext(PostsContext);
  const navigate = useNavigate();

  // ...
}
```

### Schritt 3: Nach dem Erstellen navigieren

Rufe in der `handleFormAction`-Funktion nach `createPost(fields)` die Funktion `navigate('/posts')` auf, um zur Beitragsübersicht weiterzuleiten.

```jsx
function handleFormAction(formData) {
  const fields = Object.fromEntries(formData);
  createPost(fields);
  navigate('/posts');
}
```

## Aufgabe 2: Nach dem Löschen zur Beitragsübersicht navigieren

### Schritt 1: useNavigate importieren

Öffne `src/components/Post.jsx`.

Importiere `useNavigate` aus `react-router`.

```jsx
import { useNavigate } from "react-router";
```

### Schritt 2: navigate-Funktion erstellen

Rufe `useNavigate()` auf der obersten Ebene der Component auf.

```jsx
const navigate = useNavigate();
```

### Schritt 3: Nach dem Löschen navigieren

Rufe in der `handleDelete`-Funktion nach `deletePost(id)` die Funktion `navigate('/posts')` auf, um zur Beitragsübersicht weiterzuleiten.

```jsx
function handleDelete() {
  deletePost(id);
  navigate('/posts');
}
```
