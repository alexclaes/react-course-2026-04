[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung A**

# Beiträge filtern und sortieren mit useReducer

## Ziel

Die einfache Suche in der Beitragsliste um Sortierung erweitern und den gesamten Filter-State mit `useReducer` verwalten.

## Hintergrund

Aktuell hat `PostList` nur einen einzigen `useState` für den Suchbegriff. Sobald wir aber auch nach Feld (Titel, Datum, Stimmen) und Richtung (aufsteigend, absteigend) sortieren wollen, brauchen wir drei zusammenhängende State-Werte. Genau hier zeigt `useReducer` seine Stärke: Alle Zustandsübergänge werden in einer Reducer-Funktion zentralisiert, und ein Reset auf die Ausgangswerte ist trivial.

**Warum nicht drei `useState`?** Das würde funktionieren, aber der State wächst zusammen: beim Zurücksetzen müssten wir drei Setter aufrufen, und die Logik verteilt sich. Mit einem Reducer ist alles an einer Stelle.

## Aufgabe: PostList mit useReducer erweitern

### Schritt 1: Import anpassen

Öffne `src/components/PostList.jsx`.

Ersetze `useState` durch `useReducer` im React-Import:

```jsx
import { useReducer, useContext } from 'react';
```

### Schritt 2: Reducer-Funktion und Anfangszustand definieren

Füge **oberhalb** der Komponente den Anfangszustand und die Reducer-Funktion ein:

```jsx
const initialState = {
  searchTerm: '',
  sortField: 'date',
  sortDirection: 'desc',
};

function filterReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    case 'SET_SORT_FIELD':
      return { ...state, sortField: action.payload };
    case 'SET_SORT_DIRECTION':
      return { ...state, sortDirection: action.payload };
    case 'RESET_FILTERS':
      return initialState;
    default:
      return state;
  }
}
```

### Schritt 3: useState durch useReducer ersetzen

Ersetze in der Komponente:

```jsx
const [searchTerm, setSearchTerm] = useState('');
```

durch:

```jsx
const [state, dispatch] = useReducer(filterReducer, initialState);
```

### Schritt 4: Sucheingabe anpassen

Ändere die Props des Suchfelds:

```jsx
<input
  type="text"
  placeholder="Suchen..."
  value={state.searchTerm}
  onChange={(event) => dispatch({ type: 'SET_SEARCH', payload: event.target.value })}
  className="PostList-Search"
/>
```

### Schritt 5: Sortier-Steuerelemente hinzufügen

Füge nach dem Suchfeld einen Bereich mit zwei Dropdowns und einem Reset-Button ein:

```jsx
<div className="PostList-Controls">
  <select
    value={state.sortField}
    onChange={(event) => dispatch({ type: 'SET_SORT_FIELD', payload: event.target.value })}
  >
    <option value="date">Datum</option>
    <option value="title">Titel</option>
    <option value="votes">Stimmen</option>
  </select>

  <select
    value={state.sortDirection}
    onChange={(event) => dispatch({ type: 'SET_SORT_DIRECTION', payload: event.target.value })}
  >
    <option value="desc">Absteigend</option>
    <option value="asc">Aufsteigend</option>
  </select>

  <button onClick={() => dispatch({ type: 'RESET_FILTERS' })}>
    Zurücksetzen
  </button>
</div>
```

### Schritt 6: Filter- und Sortierlogik kombinieren

Ersetze die bisherige `filteredPosts`-Berechnung durch Filter und Sortierung:

```jsx
const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
);

const sortedPosts = [...filteredPosts].sort((a, b) => {
  if (state.sortField === 'votes') {
    return state.sortDirection === 'asc' ? a.votes - b.votes : b.votes - a.votes;
  }
  const valA = (a[state.sortField] ?? '').toLowerCase();
  const valB = (b[state.sortField] ?? '').toLowerCase();
  return state.sortDirection === 'asc'
    ? valA.localeCompare(valB)
    : valB.localeCompare(valA);
});
```

Verwende dann `sortedPosts` statt `filteredPosts` im JSX:

```jsx
{sortedPosts.map((post) => (
```

## Hinweise

- Die Reducer-Funktion wird **außerhalb** der Komponente definiert: Sie hat keinen Zugriff auf Props oder andere Hooks, sondern arbeitet nur mit `state` und `action`.
  - `RESET_FILTERS` gibt einfach `initialState` zurück: Das ist einer der größten Vorteile von `useReducer` gegenüber mehreren `useState`.
