[Zurück zur Session-Übersicht](../readme.md)

**Session 09 - Übung C**

# Navigation testen

## Ziel

Testen, dass die Navigation zwischen den Seiten funktioniert, die korrekte Anzahl an Links vorhanden ist und die URL sich bei Klicks korrekt ändert.

## Hintergrund

Mit `cy.get()` kannst du Elemente über CSS-Selektoren auswählen. In Kombination mit `.should('have.length', n)` lässt sich prüfen, wie viele Elemente gefunden werden.

Um Klicks zu simulieren, verwendest du `.click()`. Nach einem Klick auf einen Link kannst du mit `cy.url()` die aktuelle URL prüfen. Die Assertion `.should('include', '/posts')` stellt sicher, dass die URL den erwarteten Pfad enthält.

## Aufgabe: Navigationstests schreiben

### Schritt 1: Testdatei erstellen

Erstelle die Datei `cypress/e2e/navigation.cy.js`:

```js
describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('die NavBar enthält drei Links', () => {
    cy.get('.NavBar a').should('have.length', 3);
  });

  it('navigiert zur Beitragsseite', () => {
    cy.contains('a', 'Alle Beiträge').click();
    cy.url().should('include', '/posts');
    cy.contains('h2', 'Alle Beiträge').should('be.visible');
  });

  it('navigiert zur Seite "Beitrag hinzufügen"', () => {
    cy.contains('a', 'Beitrag hinzufügen').click();
    cy.url().should('include', '/add-post');
  });

  it('navigiert zurück zur Startseite', () => {
    cy.contains('a', 'Alle Beiträge').click();
    cy.contains('a', 'Startseite').click();
    cy.url().should('not.include', '/posts');
    cy.contains('Willkommen beim Message Board');
  });
});
```

### Schritt 2: Test ausführen

Starte den Test Runner und klicke auf `navigation.cy.js`. Alle vier Tests sollten grün durchlaufen.

## Hinweise

- `cy.get('.NavBar a')` wählt alle `<a>`-Elemente innerhalb des Elements mit der Klasse `NavBar` aus.
- `cy.contains('a', 'Alle Beiträge')` findet ein `<a>`-Element, das den Text "Alle Beiträge" enthält.
- `.click()` simuliert einen echten Mausklick auf das Element.
- `cy.url()` gibt die aktuelle URL zurück und kann mit `.should()` geprüft werden.
