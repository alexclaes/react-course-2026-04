[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung E**

# Controlled Input (Suche/Filter)

In dieser Übung fügst du eine Suchfunktion zur Message Board hinzu, indem du ein **Controlled Input** verwendest. Während der Benutzer in ein Suchfeld tippt, filtert die Beitragsliste in Echtzeit und zeigt nur passende Beiträge an.

## Controlled Inputs

Ein **Controlled Input** ist ein Eingabeelement, dessen `value` an State gebunden ist. Jeder Tastendruck löst das `onChange`-Event aus, das den State aktualisiert, was das Input mit dem neuen Wert neu rendert. Dadurch hat React die volle Kontrolle darüber, was das Input anzeigt.

In den vorherigen Übungen haben wir `FormData` verwendet, um Werte beim Absenden zu lesen. Aber manchmal benötigt man den Wert _während der Benutzer tippt_: zum Beispiel, um eine Liste in Echtzeit zu filtern. Hier kommen Controlled Inputs ins Spiel.

## Aufgabe 1: Such-State hinzufügen

### Schritt 1: Eine `searchTerm` State-Variable hinzufügen

Öffne die Datei `PostList.jsx`:

```
src/components/PostList.jsx
```

Importiere `useState`:

```jsx
import { useState } from 'react';
```

Füge eine neue State-Variable für den Suchbegriff hinzu:

```jsx
const [searchTerm, setSearchTerm] = useState('');
```

### Schritt 2: Ein Sucheingabefeld hinzufügen

Füge ein Texteingabefeld **oberhalb** der `<PostList>` Component in deinem JSX hinzu. Dieses Input ist ein Controlled Input: sein `value` ist an den `searchTerm` State gebunden, und sein `onChange`-Handler aktualisiert diesen State bei jedem Tastendruck:

```jsx
<input
  type="text"
  placeholder="Suchen..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
  className="PostList-Search"
/>
```

Das `onChange`-Event wird jedes Mal ausgelöst, wenn der Benutzer ein Zeichen eingibt. Das Event-Objekt enthält `target.value`, also den aktuellen Inhalt des Eingabefelds. Durch den Aufruf von `setSearchTerm(event.target.value)` aktualisieren wir unseren State, um dem zu entsprechen, was der Benutzer eingegeben hat, und React rendert die Component mit dem neuen Wert neu.

Damit das JSX der Component gültig ist, muss es mit einem React-Fragment umschlossen werden:

```jsx
<>
  <input 
    /*...*/ 
  />
  <ul>
    /*...*/
  </ul>  
</>
```

## Aufgabe 2: Die Beiträge filtern

### Schritt 1: Ein gefiltertes Array erstellen

Erstelle vor der `return`-Anweisung eine gefilterte Version des Posts-Arrays mit `.filter()`. Die `.filter()`-Methode erstellt ein neues Array, das nur die Elemente enthält, die den Test bestehen. Wir verwenden `.toLowerCase()` sowohl beim Beitragstitel als auch beim Suchbegriff, damit die Suche nicht zwischen Groß- und Kleinschreibung unterscheidet:

```jsx
const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase()),
);
```

### Schritt 2: `filteredPosts` rendern

Ersetze `posts` durch `filteredPosts` im Rendering

```jsx
{filteredPosts.map((post) => ( /*...*/ )}
```

Auf diese Weise bleibt das vollständige `posts`-Array im State erhalten (es gehen keine Daten verloren), aber es werden nur die passenden Beiträge angezeigt.

## Aufgabe 3: Styling hinzufügen

Öffne `src/components/PostList.css` und füge das CSS hinzu:

```css

```