[Zurück zur Session-Übersicht](../readme.md)

**Session 09 - Übung A**

# Cypress installieren und konfigurieren

## Ziel

Cypress als Testframework im Message-Board-Projekt installieren und eine erste Konfiguration erstellen.

## Hintergrund

Cypress ist ein End-to-End-Testframework, das direkt im Browser läuft. Es ermöglicht dir, echte Benutzerinteraktionen zu simulieren: Klicks, Texteingaben, Navigation: und zu prüfen, ob die Anwendung wie erwartet reagiert.

Bevor du Tests schreiben kannst, musst du Cypress als Abhängigkeit installieren und eine Konfigurationsdatei erstellen. Die wichtigste Einstellung ist die `baseUrl`, die festlegt, auf welcher Adresse die Anwendung läuft. So musst du in deinen Tests nicht jedes Mal die vollständige URL angeben.

## Aufgabe: Cypress einrichten

### Schritt 1: Cypress installieren

Führe im Verzeichnis `workspace/message-board` folgenden Befehl aus:

```bash
npm install --save-dev cypress
```

### Schritt 2: Konfigurationsdatei erstellen

Erstelle die Datei `cypress.config.js` im Wurzelverzeichnis von `workspace/message-board`:

```js
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
});
```

Die `baseUrl` sorgt dafür, dass `cy.visit('/')` automatisch `http://localhost:5173/` aufruft.

### Schritt 3: npm-Scripts hinzufügen

Ergänze in der `package.json` zwei neue Scripts:

```json
"scripts": {
  "cy:open": "cypress open",
  "cy:run": "cypress run"
}
```

- `cy:open` startet den interaktiven Test Runner mit Browser-Oberfläche.
- `cy:run` führt alle Tests im Headless-Modus aus (ohne sichtbaren Browser).

### Schritt 4: Ordnerstruktur und Support-Datei erstellen

Erstelle die folgende Ordnerstruktur manuell:

```
cypress/
  e2e/
  support/
    e2e.js
```

Die Datei `cypress/support/e2e.js` wird von Cypress automatisch vor jedem Test geladen. Sie kann vorerst leer bleiben (oder nur einen Kommentar enthalten):

```js
// cypress/support/e2e.js
```

> **Wichtig:** Ohne diese Datei zeigt Cypress einen Fehler an, da es standardmäßig eine Support-Datei unter `cypress/support/e2e.{js,jsx,ts,tsx}` erwartet.

### Schritt 5: Cypress starten und prüfen

Starte den Test Runner:

```bash
npm run cy:open
```

1. Wähle **E2E Testing** aus.
2. Wähle einen Browser (z.B. Chrome).

Du kannst den Test Runner wieder schließen: in der nächsten Übung schreibst du deinen ersten Test.

## Hinweise

- Stelle sicher, dass sowohl der Vite-Dev-Server (`npm run dev`) als auch der API-Server (`cd server && npm run dev`) laufen, bevor du Cypress startest.
- Die von Cypress automatisch erstellten Beispieldateien kannst du ignorieren oder löschen.
