[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung D**

# Zu Arrays hinzufügen

In dieser Übung vervollständigst du das Formular, indem du neue Beiträge zum State-Array hinzufügst. Du lernst, wie du Elemente zu einem im State gespeicherten Array hinzufügst, ohne es zu verändern, und wie du das `uid`-Paket verwendest, um eindeutige IDs zu generieren.

## Aufgabe 1: Das `uid`-Paket installieren

Das `uid`-Paket ist bereits über den Workspace verfügbar. Falls es das nicht wäre, würdest du es mit folgendem Befehl installieren:

```
npm install uid
```

### Schritt 1: uid importieren

Öffne die Datei `src/App.jsx`.

Importiere `uid` am Anfang der Datei:

```jsx
import { uid } from 'uid';
```

## Aufgabe 2: Neue Beiträge zum State hinzufügen

### Schritt 1: Eine `createPost`-Funktion erstellen

Erstelle innerhalb der `App` Component eine Funktion, die einen neuen Beitrag zum Posts-Array hinzufügt. Diese Funktion verwendet den **Spread-Operator**, um ein neues Array mit den bestehenden Beiträgen plus dem neuen zu erstellen:

```jsx
function createPost(newPost) {
  setPosts([...posts, { id: uid(), votes: 0, ...newPost }]);
}
```

**Wichtige Konzepte:**

- `[...posts, newPost]` erstellt ein **neues Array** mit allen bestehenden Beiträgen plus dem neuen. Wir verändern das ursprüngliche Array niemals direkt: das nennt man **Unveränderlichkeit** (Immutability).
- `uid()` generiert eine eindeutige ID für jeden neuen Beitrag. React benötigt eindeutige Keys beim Rendern von Listen.
- `{ id: uid(), ...newPost }` erstellt ein neues Objekt, indem eine generierte ID mit den Formulardaten kombiniert wird.

### Schritt 2: `createPost` an `PostForm` übergeben

Für die Prop `onCreatePost` hinzu.

```jsx
<PostForm onCreatePost={createPost} />
```

### Schritt 3: `onCreatePost` Prop verarbeiten

Öffne `src/components/PostForm.jsx` und empfange die Prop:

```jsx
export default function PostForm({onCreatePost}) {
 // ...
}
```


Aktualisiere deine `handleFormAction`-Funktion, um `createPost` anstelle von `console.log` aufzurufen:

```jsx
function handleFormAction(formData) {
  const fields = Object.fromEntries(formData);
  onCreatePost(fields);
}
```