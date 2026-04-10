[Zurück zur Session-Übersicht](../readme.md)

# Übung A: Router einrichten

## Ziel

Installiere `react-router` und richte den `BrowserRouter` ein, um deine Message Board-App auf clientseitiges Routing vorzubereiten.

## Hintergrund

Eine **Single Page Application (SPA)** lädt eine einzelne HTML-Seite und aktualisiert den Inhalt dynamisch, während der Benutzer navigiert. Anstatt neue Seiten vom Server anzufordern, übernimmt der Browser die Navigation auf der Client-Seite. `react-router` ist die beliebteste Bibliothek, um dies in React umzusetzen.

Die `BrowserRouter` Component ist die Grundlage von React Router. Sie muss deine gesamte Anwendung umschließen, damit alle Components darin auf den Routing-Kontext zugreifen können.

## Aufgabe: Router einrichten

### Schritt 1: Installiere den Router

 Installiere `react-router` als Abhängigkeit:

```bash
npm install react-router
```

### Schritt 2: Den Router nutzen

Öffne `src/main.jsx`.

Importiere den `BrowserRouter` aus `react-router`.

```jsx
import { BrowserRouter } from "react-router";
```


Umschließe `<App />` in `main.jsx` mit `<BrowserRouter>...</BrowserRouter>` (innerhalb von `<StrictMode>`).

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```


## Hinweise

- `BrowserRouter` sollte `<App />` in `main.jsx` umschließen, innerhalb von `<StrictMode>`
- Dies ist nur der Einrichtungsschritt: Wir werden in einer späteren Übung tatsächliche Routes hinzufügen
