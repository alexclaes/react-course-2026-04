describe('Startseite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('zeigt die Willkommensnachricht', () => {
    cy.contains('h2', 'Willkommen beim Message Board').should('be.visible');
  });
});
