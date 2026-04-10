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
