[Zurück zur Session-Übersicht](../readme.md)

**Session 03 - Übung B**

# Umschalt-Button

In dieser Übung wirst du den "Mehr lesen"-Button funktionsfähig machen, sodass er die Sichtbarkeit der Zusammenfassung umschaltet. Du lernst, wie man Klick-Events behandelt, Event Handler als Props weitergibt und ternäre Ausdrücke für bedingtes Rendern verwendet.

## Bedingtes Rendern mit dem ternären Operator `? :` verstehen

Verwende den ternären Operator, wenn du zwischen zwei Alternativen wählen musst:

```jsx
{
  condition ? 'Text A' : 'Text B';
}
```

Wenn `condition` `true` ist, ergibt der Ausdruck `'Text A'`. Wenn `false`, ergibt er `'Text B'`. Dies ist nützlich zum Wechseln von Button-Beschriftungen, Klassennamen oder überall dort, wo du immer etwas rendern möchtest, aber auswählen musst, was.

### Ternärer Operator vs. &&

- Der `&&`-Operator **zeigt oder verbirgt**: er rendert das Element, wenn true, und rendert nichts, wenn false.
- Der ternäre Operator **wechselt zwischen zwei Optionen**: er rendert immer etwas und wählt eine von zwei Alternativen.

Verwende `&&`, wenn Inhalte erscheinen oder verschwinden sollen. Verwende einen ternären Operator, wenn du zwischen zwei verschiedenen Ausgaben wechseln musst.

## Aufgabe: Den Umschalt-Button verknüpfen

### Schritt 1: Eine Umschaltfunktion erstellen

Öffne `src/components/Post.jsx`. Die Komponente hat bereits einen `showMore` State und das bedingte Rendern `{showMore && <p>{summary}</p>}`. Füge eine `toggleShowMore`-Funktion hinzu, die den State umschaltet:

```jsx
function toggleShowMore() {
  setShowMore(!showMore);
}
```

Platziere diese Funktion innerhalb der `Post`-Komponente, nach dem `useState`-Aufruf und vor dem `return`-Statement.

### Schritt 2: IconButton aktualisieren, um onClick zu akzeptieren

Öffne `src/components/IconButton.jsx`. Derzeit akzeptiert die Komponente nur `children`. Füge eine `onClick`-Prop hinzu und übergib sie an das zugrunde liegende `<button>`-Element:

```jsx
export default function IconButton({ children, onClick }) {
  return (
    <button className="IconButton" onClick={onClick}>
      {children} <MdReadMore />
    </button>
  );
}
```

### Schritt 3: Den Toggle-Handler an IconButton übergeben

Zurück in `src/components/Post.jsx`, übergib die `toggleShowMore`-Funktion über die `onClick`-Prop an `IconButton`:

```jsx
<IconButton onClick={toggleShowMore}>Mehr lesen</IconButton>
```

### Schritt 4: Button-Text mit ternärem Operator ändern

Ersetze den statischen "Mehr lesen"-Text durch einen ternären Ausdruck, der basierend auf dem `showMore` State wechselt:

```jsx
<IconButton onClick={toggleShowMore}>
  {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
</IconButton>
```

Wenn `showMore` `true` ist, zeigt der Button "Weniger anzeigen". Wenn `false`, zeigt er "Mehr lesen".
