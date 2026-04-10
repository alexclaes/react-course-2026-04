[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung D**

# Context erstellen

In den vorherigen Übungen hast du State in `App` verwaltet und Callback-Funktionen wie `onUpdatePost` und `onDeletePost` als Props durch `PostList` hindurch an `Post` weitergegeben. `PostList` nutzt diese Funktionen selbst gar nicht: es reicht sie nur weiter. Dieses Muster nennt man **Prop Drilling**.

Bei kleinen Apps ist Prop Drilling kein Problem. Aber je tiefer der Component-Baum wird, desto unübersichtlicher wird es. React bietet dafür eine Lösung: **Context**.

## Was ist Context?

Context ermöglicht es, Daten für einen ganzen Component-Baum bereitzustellen, ohne sie manuell über Props durch jede Ebene weiterzureichen.

Context besteht aus zwei Teilen:

1. **Erstellen**: Mit `createContext()` wird ein Context-Objekt erstellt
2. **Bereitstellen**: Mit `<Context.Provider value={...}>` werden die Daten für alle darunterliegenden Components verfügbar gemacht

In der nächsten Übung wirst du dann lernen, wie Components die bereitgestellten Daten mit `useContext` auslesen können.

## Aufgabe 1: Den PostsContext erstellen

### Schritt 1: Eine neue Datei für den Context erstellen

Erstelle eine neue Datei:

```
src/PostsContext.jsx
```

### Schritt 2: Den Context erstellen und exportieren

Importiere `createContext` aus React und erstelle einen neuen Context:

```jsx
import { createContext } from 'react';

export const PostsContext = createContext();
```

`createContext()` gibt ein Context-Objekt zurück, das wir exportieren, damit andere Dateien darauf zugreifen können.

## Aufgabe 2: Den Provider in App einbauen

### Schritt 1: PostsContext importieren

Öffne die Datei `src/App.jsx` und importiere den Context:

```jsx
import { PostsContext } from './PostsContext';
```

### Schritt 2: Den Provider um die App wickeln

Umschließe das gesamte JSX im `return`-Statement mit dem `PostsContext.Provider`. Übergib ein Objekt mit den Daten und Funktionen, die du bereitstellen möchtest:

```jsx
return (
  <PostsContext.Provider value={{ posts, createPost, updatePost, deletePost }}>
    <div className="App">
      { /* ... */ }
    </div>
  </PostsContext.Provider>
)
```

Das `value`-Objekt enthält:
- `posts`: das Array mit allen Beiträgen
- `createPost`: Funktion zum Hinzufügen eines Beitrags
- `updatePost`: Funktion zum Aktualisieren eines Beitrags
- `deletePost`: Funktion zum Löschen eines Beitrags

**Wichtig:** Die bestehenden Props bleiben vorerst erhalten. Die App funktioniert weiterhin wie vorher. In der nächsten Übung werden die Components den Context nutzen und die Props können dann entfernt werden.