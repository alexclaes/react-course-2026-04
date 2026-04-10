[Zurück zur Session-Übersicht](../readme.md)

# Übung C: Routes und Navigation

## Ziel

Definiere Routes für deine Pages und erstelle eine Navigationsleiste mit aktivem Link-Styling.

## Hintergrund

React Router stellt mehrere wichtige Components bereit:
- **`Routes`**: Ein Container, der die erste `Route` rendert, deren `path` zur aktuellen URL passt
- **`Route`**: Ordnet einen URL-Pfad über die `element`-Prop einer Component zu
- **`NavLink`**: Eine spezielle Link Component, die weiß, ob sie "aktiv" ist (d.h. ihr `to`-Pfad zur aktuellen URL passt). Sie fügt automatisch eine `active`-Klasse hinzu, wenn sie aktiv ist.

## Aufgabe 1: Die Page Components mit dem Router verbinden

### Schritt 1: Imports anpassen

Öffne `src/App.jsx`:

Importiere `Routes` und `Route` aus `react-router`

```jsx
import {Routes, Route} from "react-router"

```

Importiere die Page Components:

```jsx

import HomePage from './pages/HomePage';
import AllPostsPage from './pages/AllPostsPage';
import AddPostPage from './pages/AddPostPage';
```

### Schritt 2: Routes rendern

Ersetze das direkte Rendern von `PostList` und `PostForm` durch `Routes` und `Route` Components:

- Route `"/"` rendert `HomePage`
- Route `"/posts"` rendert `AllPostsPage`
- Route `"/add-post"` rendert `AddPostPage`

```jsx
<Routes>
  <Route index element={<HomePage />} />
  <Route path="/posts" element={<AllPostsPage />} />
  <Route path="/add-post" element={<AddPostPage />} />
</Routes>
```

### Schritt 3: Aufräumen

Entferne die nun ungenutzten Imports von "PostList" und "PostForm"


## Aufgabe 2: Erstelle eine Navigationsleiste

### Schritt 1: NavBar Component erstellen

Erstelle `src/components/NavBar.jsx`:

Importiere `NavLink` aus `react-router`

```jsx
import { NavLink } from "react-router";
```

Rendere ein `<nav>` mit drei `NavLink` Components:

- `"Startseite"` verlinkt auf `"/"`
- `"Alle Beiträge"` verlinkt auf `"/posts"`
- `"Beitrag hinzufügen"` verlinkt auf `"/add-post"`

```jsx
export default function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">Startseite</NavLink>
      <NavLink to="/posts">Alle Beiträge</NavLink>
      <NavLink to="/add-post">Beitrag hinzufügen</NavLink>
    </nav>
  )
}
```

### Schritt 2:

Erstelle `src/components/NavBar.css` und füge etwas Styling hinzu.

```css
.NavBar {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.NavBar a {
    font-weight: 700;
    color: black;
    text-decoration: underline;
}

.NavBar a.active {
    color: var(--color-primary)
}
```

Öffne `NavBar.jsx` und importiere `NavBar.css`

```jsx
import "./NavBar.css"
```

### Schritt 3: NavBar rendern

Öffne `src/App.jsx`.

Importiere die `NavBar` Component.

Füge `<NavBar />` zwischen `Header` und `Routes` hinzu