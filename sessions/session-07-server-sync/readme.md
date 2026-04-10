[Zurück zur Kurs-Übersicht](../../readme.md)

# Session 07: Mit Server Synchronisieren

## 💪 Motivation

Diese Session befasst sich mit dem Abrufen von Daten aus APIs in React-Anwendungen. Darüber hinaus werden Sie dynamisch mit APIs interagieren, indem Sie Daten effizient in React-Anwendungen senden und aktualisieren.

Du lernst, Seiteneffekte effizient zu verwalten, um externe Daten zu laden und das UI zu aktualisieren. Sie werden Strategien für optimistische UI-Aktualisierungen kennenlernen, um Änderungen sofort widerzuspiegeln und so die Benutzererfahrung mit Echtzeit-Reaktionsfähigkeit zu verbessern.

## ☝️ Voraussetzung

Für diese Session wird ein lokaler Express-Server benötigt, der die Daten in einer SQLite-Datenbank speichert. Starte den Server in einem separaten Terminal:

```bash
cd server
npm install
npm run dev
```

Der Server läuft auf `http://localhost:3001`.

## 🎯 Lernziele

- Verwendung von `fetch` in React zum Laden von Daten aus einer API
- Verstehen des `useEffect` Hooks
- Verstehen des Konzepts von Seiteneffekten
- Tieferes Verständnis des Render-Zyklus in React
- Verwendung von `fetch` zum Senden von Daten an eine API
- Erneutes Abrufen von Daten nach einer Aktualisierung
- Trennung von Events und Effekten
- Anwendung von optimistischen UI-Aktualisierungen

## 🚀 Übungen

- [Session 07 - Übung A: API-Einrichtung](exercise-07a-preparations/readme.md)
- [Session 07 - Übung B: fetch und useEffect](exercise-07b-use-effect/readme.md)
- [Session 07 - Übung C: Ladezustände](exercise-07c-loading-states/readme.md)
- [Session 07 - Übung D: Neuen Post Serverseitig speichern](exercise-07d-server-create-post/readme.md)
- [Session 07 - Übung E: Voting synchronisieren](exercise-07e-server-update-post/readme.md)
- [Session 07 - Übung F: Löschen synchronisieren](exercise-07f-server-delete-post/readme.md)

## 📚 Weiteres Lernmaterial

- [react.dev - Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [react.dev - useEffect](https://react.dev/reference/react/useEffect)
- [Robin Wieruch - How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/)
- [React With Hooks - Using the Effect Hook](https://reactwithhooks.netlify.app/docs/hooks-effect.html)
- [react.dev - Ereignisse von Effekten trennen](https://react.dev/learn/separating-events-from-effects)
- [Kyle DeGuzman - Was sind optimistische Updates?](https://medium.com/@kyledeguzmanx/what-are-optimistic-updates-483662c3e171)
