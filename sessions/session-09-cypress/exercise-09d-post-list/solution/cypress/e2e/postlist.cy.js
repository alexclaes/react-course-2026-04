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
