[Zurück zur Session-Übersicht](../readme.md)

**Session 09 - Übung D**

# Beitragsliste prüfen

## Ziel

Testen, dass die Beiträge vom Server geladen und korrekt in der Liste angezeigt werden.

## Hintergrund

Die Beitragsliste wird asynchron vom Server geladen. Cypress wartet automatisch auf Elemente, die noch nicht im DOM vorhanden sind: es versucht eine Assertion mehrmals, bis sie erfolgreich ist oder ein Timeout erreicht wird (standardmäßig 4 Sekunden). Deshalb brauchst du kein manuelles `cy.wait()`, um auf die API-Antwort zu warten.

Mit `.should('have.length', n)` prüfst du die genaue Anzahl von Elementen. Cypress wiederholt die Suche automatisch, bis die erwartete Anzahl gefunden wird oder der Timeout abläuft.

## Aufgabe: Beitragsliste testen

### Schritt 1: Testdatei erstellen

Erstelle die Datei `cypress/e2e/postlist.cy.js`:

```js
describe('Beitragsliste', () => {
  beforeEach(() => {
    cy.visit('/posts');
  });

  it('zeigt genau 3 Beiträge an', () => {
    cy.get('.PostList-Item').should('have.length', 3);
  });

  it('enthält den Beitrag "Mein erster Beitrag"', () => {
    cy.contains('.PostList-Item', 'Mein erster Beitrag').should('be.visible');
  });
});
```

### Schritt 2: Test ausführen

Starte den Test Runner und klicke auf `postlist.cy.js`. Beide Tests sollten grün durchlaufen.

## Hinweise

- `cy.get('.PostList-Item')` wählt alle `<li>`-Elemente mit der Klasse `PostList-Item` aus. Cypress wartet automatisch, bis mindestens ein Element vorhanden ist.
- `cy.contains('.PostList-Item', 'Mein erster Beitrag')` sucht nach einem `.PostList-Item`-Element, das den Text "Mein erster Beitrag" enthält.
- Falls die Tests fehlschlagen, stelle sicher, dass der API-Server läuft (`cd server && npm run dev`) und die Datenbank die erwarteten Beiträge enthält.
