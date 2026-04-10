[Zurück zur Session-Übersicht](../readme.md)

# Übung B: Page Components

## Ziel

Erstelle eigene Page Components, die später als Route-Ziele verwendet werden. Dadurch werden "Pages" (was eine Route rendert) von "Components" (wiederverwendbare UI-Bausteine) getrennt.

## Hintergrund

In einer gerouteten React-App ist es üblich, Components in **Pages** (auch Views genannt) und **Components** zu organisieren. Pages repräsentieren vollständige Bildschirme, auf die eine Route zeigt, während Components kleinere, wiederverwendbare Bausteine sind. Eine Page Component setzt sich typischerweise aus einer oder mehreren regulären Components zusammen.

## Aufgabe 1: Homepage anlegen

Erstelle ein neues Verzeichnis: 

`src/components/pages/`

Erstelle darin die Datei `src/components/pages/HomePage.jsx`:

Rendere eine `<h2>Willkommen beim Message Board</h2>` Überschrift.

```jsx
export default function HomePage() {
  return <h2>Willkommen beim Message Board</h2>
}
```

## Aufgabe 2: Erstelle eine Seite für alle Posts

Erstelle `src/components/pages/AllPostsPage.jsx`:

Rendere eine `<h2>Alle Beiträge</h2>` Überschrift und die `PostList` Component.

```jsx
import PostList from "../components/PostList";

export default function AllPostsPage(){
  return(
    <>
      <h2>Alle Beiträge</h2>
      <PostList />
    </>
  )
}
```

## Aufagbe 3: Erstelle eine Seite zum Hinzufügen neuer Posts
   

Erstelle `src/components/pages/AddPostPage.jsx`:

Rendere eine `<h2>Neuen Beitrag hinzufügen</h2>` Überschrift und die `PostForm` Component.

```jsx
import PostForm from "../components/PostForm";

export default function AddPostPage(){
  return(
    <>
      <h2>Alle Beiträge</h2>
      <PostForm />
    </>
  )
}
```