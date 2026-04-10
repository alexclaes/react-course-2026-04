[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung D**

# React Icons

In dieser Übung fügst du ein Icon zur `IconButton`-Komponente hinzu, indem du die `react-icons`-Bibliothek verwendest.

## Aufgabe: Ein Icon zum IconButton hinzufügen

### Schritt 1: react-icons installieren

Das `react-icons`-Paket ist bereits über den Workspace-Root verfügbar. Wenn du ausserhalb des Workspace arbeitest, kannst du es installieren mit:

```
npm install react-icons
```

Die `react-icons`-Bibliothek stellt tausende Icons aus beliebten Icon-Sets (Material Design, Font Awesome, etc.) als React-Komponenten bereit.

### Schritt 2: Ein Icon importieren

Öffne `src/components/IconButton.jsx`. Importiere das `MdReadMore`-Icon aus dem Material-Design-Icon-Set:

```jsx
import { MdReadMore } from 'react-icons/md';
```

Icon-Komponenten sind nach ihrem Icon-Set-Präfix benannt (`Md` für Material Design), gefolgt vom Icon-Namen. Du kannst alle verfügbaren Icons unter [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/) durchsuchen.

### Schritt 3: Das Icon rendern

Füge die `<MdReadMore />`-Komponente neben `{children}` innerhalb des Buttons hinzu. Icons sind einfach React-Komponenten, du renderst sie also wie jede andere Komponente:

```jsx
import './IconButton.css';
import { MdReadMore } from 'react-icons/md';

export default function IconButton({ children }) {
  return (
    <button className="IconButton">
      {children} <MdReadMore />
    </button>
  );
}
```

### Schritt 4: Das Icon stylen

Das Icon wird als `<svg>`-Element gerendert. Du kannst seine Größe mit `font-size` in CSS steuern. Füge eine Regel zu `src/components/IconButton.css` hinzu:

```css
.IconButton svg {
  font-size: 2em;
}
```
