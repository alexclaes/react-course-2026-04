[Zurück zur Session-Übersicht](../readme.md)

**Session 01 - Übung F**

# Styles hinzufügen

In dieser Übung lernst du, wie du Styles auf React-Components und die gesamte Anwendung anwendest.

## Aufgabe 1: Globale Styles anwenden

### Schritt 1: `index.css` aktualisieren

Öffne die Datei `src/index.css`. Diese Datei enthält **globale Styles**, die für die gesamte Anwendung gelten.

Füge CSS-Variablen hinzu:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  font-family: sans-serif;
  line-height: 1.5;
  font-weight: 400;

  --color-primary: #23c696;
  --color-grey: #ccc;
}
```

**Hinweis:** CSS-Variablen, die in `:root` definiert sind, können in jeder CSS-Datei der Anwendung mit `var(--variable-name)` verwendet werden.

## Aufgabe 2: Die Header-Component stylen

### Schritt 1: Eine CSS-Datei für den Header erstellen

Erstelle eine neue Datei namens `Header.css` im `components`-Verzeichnis:

```
src/components/Header.css
```

### Schritt 2: Styles für den Header hinzufügen

Füge die folgenden Styles hinzu:

```css
.Header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-primary);
  padding: 1em;
  margin: 0 0 2em 0;
}

.Header-title {
  font-size: 1.7em;
  font-weight: bold;
}
```

### Schritt 3: Die CSS-Datei in der Component importieren

Öffne die Datei `src/components/Header.jsx`.

Füge ein Import-Statement für die CSS-Datei am Anfang hinzu:

```jsx
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <span className="Header-title">Message Board</span>
    </header>
  );
}
```

**Wichtige Beobachtungen:**

- CSS-Dateien werden wie JavaScript-Module importiert.
- Das `className`-Attribut in JSX verknüpft das Element mit der CSS-Klasse.
- Jede Component kann ihre eigene CSS-Datei haben, um Styles organisiert zu halten.

## Aufgabe 3: Die Post-Component stylen

### Schritt 1: Eine CSS-Datei für den Post erstellen

Erstelle eine neue Datei namens `Post.css` im `components`-Verzeichnis:

```
src/components/Post.css
```

### Schritt 2: Styles für den Post hinzufügen

Füge die folgenden Styles für die Post-Karte hinzu:

```css
.Post {
  border: 1px solid var(--color-grey);
  border-radius: 1em;
  padding: 1em;
}

.Post-title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 0 1em 0;
}

.Post-content {
  display: grid;
  grid-template-areas:
    'author button'
    'date button';
  gap: 0.5em;
}

.Post-author {
  grid-area: author;
}

.Post-date {
  grid-area: date;
}

.Post-button {
  grid-area: button;
  justify-self: end;
  align-self: center;
}

.Post-button button {
  background: var(--color-primary);
  border-radius: 0.5em;
  border: none;
  padding: 1em;
  font-weight: bold;
}
```

### Schritt 3: Die CSS-Datei in der Component importieren

Öffne die Datei `src/components/Post.jsx`.

Füge ein Import-Statement für die CSS-Datei am Anfang hinzu:

```jsx
import './Post.css';
```