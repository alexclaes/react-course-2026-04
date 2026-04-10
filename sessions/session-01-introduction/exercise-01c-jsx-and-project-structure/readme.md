[Zurück zur Session-Übersicht](../readme.md)

**Session 01 - Übung C**

## Aufgabe 1: Erstelle ein neues Projekt mit `vite`

Öffne das Arbeitsverzeichnis in deiner IDE mit dem integrierten Terminal:

```
workspace
```

Erstelle ein neues Projekt mit `vite`

```
npm create vite@latest
```

Nutze die folgenden Einstellungen

- Projektname: `message-board`
- Framework: `React` 
- Variant: `JavaScript`

Nachdem das Projekt erstellt wurde, sollte der lokale Entwicklungsserver automatisch starten. 

Du kannst den lokalen Entwicklungsserver auch manuell starten:

```
npm run dev
```

Öffne die React-App in deinem Browser unter `http://localhost:5173/`.

## Aufgabe 2: Die Projektstruktur erkunden

### Schritt 1: Projektübersicht

Untersuche die Verzeichnisse und Dateien in der Codebasis:

| Pfad             | Beschreibung                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| `node_modules` | Alle via `npm` installierten Abhängigkeiten. Hier niemals Änderungen vornehmen. Sollte nicht per `git` comitted werden. | 
| `public`         | Dieses Verzeichnis wird zum Speichern von Asset-Dateien verwendet, die im Browser geladen werden können.            |
| `index.html`     | Diese Datei ist die HTML-Seite, die im Browser geladen wird. In der Regel musst du hier keine Änderungen vornehmen. |
| `src`            | Dieses Verzeichnis wird zum Speichern deines gesamten Codes verwendet.                                              |
| `src/App.jsx`    | Diese Datei enthält die `App` React-Component: Den Startpunkt aller React-Apps.                                     |


### Schritt 2: Den React-Code verstehen

Öffne die Datei `src/App.jsx`.

Lies den Code und versuche das Muster zu finden, das du in vielen/allen React-Components sehen wirst.

**Du solltest die folgenden Beobachtungen untersuchen:**

- Der Dateiname hat die Erweiterung `.jsx` (nicht `.js`).
- Dies ist eine JavaScript-Datei, die eine Art HTML enthält. Das ist eine spezielle Sprache namens **JSX**.
- Eine React-Component ist eine **Funktion mit einem Namen in Großbuchstaben**, die **JSX zurückgibt**.
- In den meisten Fällen erstreckt sich das JSX über mehrere Zeilen. Deshalb wird alles **hinter dem return-Statement** in **Klammern** `( ... )` eingeschlossen.
- Die Funktion für die Component hat ein `export`-Statement, damit sie in anderen Components verwendet werden kann.
- Die Styles für diese Component werden mit einem `import`-Statement am Anfang der Datei eingebunden.

## Aufgabe 3: Die App anpassen

### Schritt 1: Das JSX ändern

Öffne die Datei `src/App.jsx`.

Ändere den Inhalt der Überschrift zu **"Message Board"**:

```jsx
<h1>Message Board</h1>
```

Öffne die React-App in deinem Browser, um die Änderungen zu sehen.

### Schritt 2: Unterschiede zwischen HTML und JSX verstehen

**Du solltest diese sehr häufigen Unterschiede zwischen HTML und JSX kennen:**

- In JSX wird das `class`-Attribut in `className` umbenannt.
- JSX muss ein **einzelnes Wurzelelement** haben. Das **React Fragment** `<>...</>` kann am Anfang und Ende des **return**-Statements verwendet werden.
- Components ohne Inhalt (ohne schließendes Tag) müssen **selbstschließend** sein, indem ein Schrägstrich am Ende verwendet wird: `/>`

## Aufgabe 4: Aufräumen

Lösche den Inhalt der Datei `src/App.jsx` und ersetze ihn mit:

```jsx
import './App.css'

export default function App() {
  return (
    <div className="App">
      <h1>Message Board</h1>
    </div>
  )
}
```

Lösche den Inhalt der Datei `src/App.css` vollständig.

Lösche das Verzeichnis `src/assets/`.

Lösche den Inhalt der Datei `src/index.css` und ersetze ihn mit:

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
}
```

