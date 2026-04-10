[Zurück zur Session-Übersicht](../readme.md)

**Session 01 - Übung D**

# Deine erste React-Component

In dieser Übung wirst du deine erste React-Component erstellen: Einen `Header` für die Message Board-App.

## Aufgabe: Die `Header`-Component erstellen

### Schritt 1: Eine neue Datei für die Component erstellen

Erstelle eine neue Datei namens `Header.jsx` im `components`-Verzeichnis:

```
src/components/Header.jsx
```

**Hinweis:** Achte auf die Dateiendung. Sie muss `.jsx` sein.

### Schritt 2: Den Component-Code schreiben

Füge den folgenden React-Code in die Datei ein:

```jsx
export default function Header() {
  return (
    <header className="Header">
      <span className="Header-title">Message Board</span>
    </header>
  );
}
```

**Wichtige Beobachtungen:**

- Der Funktionsname beginnt mit einem **Großbuchstaben**. Das ist für React-Components erforderlich.
- Das `export default`-Statement macht die Component für andere Dateien verfügbar.
- Die Component gibt JSX zurück, das ähnlich wie HTML aussieht.

### Schritt 3: Die `Header`-Component in der `App`-Component verwenden

Öffne die Datei `src/App.jsx`.

Importiere die `Header`-Component am Anfang der Datei:

```jsx
import Header from './components/Header';
```

Ersetze das bestehende `<h1>`-Element durch die `Header`-Component:

```jsx
import './App.css';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
```

**Hinweise:**

- Components werden in JSX mit einem **großen Anfangsbuchstaben** geschrieben.
- Components ohne Inhalt müssen **selbstschließend** sein (`<Header />`).