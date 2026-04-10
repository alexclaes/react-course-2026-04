[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung C**

# Formulardaten verarbeiten

In dieser Übung wirst du die Formularübermittlung mit den **Form Actions** von React 19 verarbeiten. Du lernst, wie du Formularwerte extrahierst und sie für die Verwendung in deiner Anwendung vorbereitest.

## Aufgabe: Formularübermittlung mit einer Form Action verarbeiten

### Schritt 1: Einen Form Action Handler erstellen

Öffne die Datei `src/components/PostForm.jsx`.

Erstelle innerhalb der `PostForm` Component eine `handleFormAction`-Funktion. Diese Funktion erhält ein `FormData`-Objekt direkt von React:

```jsx
function handleFormAction(formData) {
  const fields = Object.fromEntries(formData);
  console.log(fields);
}
```

Hier ist, was jede Zeile macht:

- `formData`: React übergibt die Formulardaten direkt an die Funktion.
- `Object.fromEntries(formData)`: wandelt die FormData in ein einfaches JavaScript-Objekt um, wie `{ title: "Hallo", author: "Alex", ... }`
- `console.log(fields)`: gibt die Formulardaten aus, damit wir überprüfen können, ob es funktioniert

### Schritt 2: Den Handler an das Formular anhängen

Füge die `action` Prop zum `<form>`-Element hinzu:

```jsx
<form className="PostForm" action={handleFormAction}>
```