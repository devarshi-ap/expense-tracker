describe('Go to home page', () => {
  it('successfully loads', () => {
    cy.visit('/')

    // fill out transaction form

    cy.get('[data-cy="txn-name"]').type("PS4 Video Game")
    cy.get('[data-cy="txn-category"]').select("Rec. & Entertainment")
    cy.get('[data-cy="txn-type"]').select("Expense")
    cy.get('[data-cy="txn-amount"]').type('7.50')
    cy.get('[data-cy="txn-date"]').type('2022-06-13')
    
    // submit form
    
    cy.get('[data-cy="txn-submit"]').click()
    
    // wait 2s
    
    cy.clock().tick(2000)

    // expect toastify notification

    cy.get('[data-cy="main-app"]').contains('Expense Added!')

    // expect balance to be updated

    cy.get('[data-cy="account-balance"]').contains('-7.5')

    // wait 2s
    
    cy.clock().tick(2000)
    
    // expect <TransactionLog /> to have 1 more child

    cy.get('[data-cy="txn-log"]').children().should('have.length', 1)

  });
});
