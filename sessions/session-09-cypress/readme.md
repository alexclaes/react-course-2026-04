[Zurück zur Kurs-Übersicht](../../readme.md)

# Session 09: End-to-End Tests mit Cypress

## 💪 Motivation

End-to-End-Tests (E2E) simulieren echte Benutzerinteraktionen im Browser. Sie prüfen, ob die gesamte Anwendung: vom Frontend bis zum Server: wie erwartet funktioniert. Cypress ist ein modernes Testframework, das speziell für Webanwendungen entwickelt wurde und eine intuitive API bietet.

In dieser Session lernst du, wie du Cypress installierst, konfigurierst und erste Tests für das Message Board schreibst. Du wirst Seiteninhalte prüfen, Navigation testen und sicherstellen, dass geladene Daten korrekt angezeigt werden.

## ☝️ Voraussetzung

Für diese Session müssen sowohl der Vite-Entwicklungsserver als auch der Express-API-Server laufen:

```bash
# Terminal 1: React-App starten
cd workspace/message-board
npm run dev
```

```bash
# Terminal 2: API-Server starten
cd server
npm run dev
```

Die React-App läuft auf `http://localhost:5173`, der API-Server auf `http://localhost:3001`.

## 🎯 Lernziele

- Installation und Konfiguration von Cypress
- Schreiben von E2E-Tests mit `describe`, `it` und `beforeEach`
- Auswählen von Elementen mit `cy.get()` und `cy.contains()`
- Testen von Navigation und URL-Änderungen
- Prüfen von geladenen Daten im Browser

## 🚀 Übungen

- [Session 09 - Übung A: Cypress installieren und konfigurieren](exercise-09a-cypress-setup/readme.md)
- [Session 09 - Übung B: Erster Test: Startseite prüfen](exercise-09b-first-test/readme.md)
- [Session 09 - Übung C: Navigation testen](exercise-09c-navigation/readme.md)
- [Session 09 - Übung D: Beitragsliste prüfen](exercise-09d-post-list/readme.md)

## 📚 Weiteres Lernmaterial

- [Cypress Dokumentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/app/core-concepts/best-practices)
- [Cypress API Reference](https://docs.cypress.io/api/table-of-contents)
