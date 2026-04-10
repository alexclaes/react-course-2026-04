[Zurück zur Session-Übersicht](../readme.md)

**Session 09 - Übung B**

# Erster Test: Startseite prüfen

## Ziel

Einen ersten Cypress-Test schreiben, der die Startseite besucht und prüft, ob die Willkommensnachricht angezeigt wird.

## Hintergrund

Ein Cypress-Test besteht aus `describe`- und `it`-Blöcken. `describe` gruppiert zusammengehörige Tests, `it` definiert einen einzelnen Testfall. Mit `cy.visit()` navigierst du zu einer Seite, und mit `cy.contains()` prüfst du, ob ein bestimmter Text sichtbar ist.

Der Befehl `cy.contains('h2', 'Text')` sucht nach einem `<h2>`-Element, das den angegebenen Text enthält. Mit `.should('be.visible')` stellst du sicher, dass das Element auch tatsächlich sichtbar ist.

`beforeEach` ist ein Block, der vor jedem `it`-Testfall ausgeführt wird. Er eignet sich gut, um die Seite vor jedem Test neu zu laden.

## Aufgabe: Ersten Test schreiben

### Schritt 1: Testdatei erstellen

Erstelle die Datei `cypress/e2e/homepage.cy.js` im Verzeichnis `workspace/message-board`:

```js
describe('Startseite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('zeigt die Willkommensnachricht', () => {
    cy.contains('h2', 'Willkommen beim Message Board').should('be.visible');
  });
});
```

### Schritt 2: Test ausführen

Starte den Test Runner mit:

```bash
npx cypress open
```

1. Wähle **E2E Testing** und einen Browser.
2. Klicke auf `homepage.cy.js` in der Testliste.
3. Der Test sollte grün durchlaufen.

## Hinweise

- `cy.visit('/')` nutzt automatisch die `baseUrl` aus `cypress.config.js`.
- `cy.contains()` durchsucht den sichtbaren Text auf der Seite. Du kannst optional einen CSS-Selektor als erstes Argument angeben, um die Suche einzuschränken.
- `.should('be.visible')` ist eine Assertion, die prüft, ob das Element im sichtbaren Bereich der Seite liegt.
