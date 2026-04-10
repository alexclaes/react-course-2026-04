[Zurück zur Session-Übersicht](../readme.md)

**Session 03 - Übung D**

# Abstimmungsbuttons

In dieser Übung wirst du die einfachen Abstimmungsbuttons umbauen, um die wiederverwendbare `IconButton`-Komponente zu verwenden. Du wirst eine `icon`-Prop zu `IconButton` hinzufügen, damit je nach Kontext unterschiedliche Icons angezeigt werden können.

## Aufgabe: Abstimmungsbuttons auf IconButton umbauen

### Schritt 1: Eine icon-Prop zu IconButton hinzufügen

Öffne `src/components/IconButton.jsx`. Derzeit rendert die Komponente immer das `MdReadMore`-Icon. Aktualisiere sie, um eine `icon`-Prop zu akzeptieren und diese stattdessen zu rendern. Verwende `MdReadMore` als Standardwert, damit bestehende Verwendungen weiterhin funktionieren:

```jsx
import './IconButton.css';

export default function IconButton({
  children,
  onClick,
  icon
}) {
  return (
    <button className="IconButton" onClick={onClick}>
      {children} {icon}
    </button>
  );
}
```

Durch die Verwendung eines Standard-Parameterwerts zeigt jeder `IconButton`, der keine `icon`-Prop übergibt, weiterhin das `MdReadMore`-Icon an.

### Schritt 2: Den Mehr-lesen-Button aktualisieren

Öffne `src/components/Post.jsx` und importiere dort das Icon.

```jsx
import { MdReadMore } from 'react-icons/md';
```

Übergebe das Icon als Prop.

```jsx
<IconButton onClick={toggleShowMore} icon={<MdReadMore />}>
  {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
</IconButton>
```

### Schritt 3: Einfache Buttons durch IconButton ersetzen

Ersetze die beiden einfachen `<button>`-Elemente im `Post-votes`-Div durch `IconButton`-Komponenten. Übergib das passende Icon und den `onClick`-Handler an jede:

```jsx
<div className="Post-votes">
  <IconButton onClick={handleUpvote} icon={<MdThumbUp />}>
    Hochwählen
  </IconButton>
  <IconButton onClick={handleDownvote} icon={<MdThumbDown />}>
    Runterwählen
  </IconButton>
  <p>Stimmen: {votes}</p>
</div>
```


