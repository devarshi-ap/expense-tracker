describe('My name is Giovanni Giorgio...', () => {
  it('but everybody calls me Giorgio', () => {
    cy.visit('/')
    
    const names = ['PS4 Game', 'Tuition', 'Bus Fare', 'Bicycle Repair', 'SONY Headphones', 'Pkmn Heartgold', 'Phineas\'s E-Transfer', 'OSAP Funding', 'Freelance Photography Gig', '4 Month Contract', 'Babysitting Payment']
    const categories = [
        'Bills & Utilities',
        'Childcare',
        'Debt',
        'Education',
        'Food & Dining',
        'Giving',
        'Health & Fitness',
        'Housing',
        'Income',
        'Medical',
        'Other',
        'Personal Care',
        'Rec. & Entertainment',
        'Savings',
        'Shopping',
        'Taxes',
        'Transportation',
    ];
    const amounts = [-7.58, -4532, -2.35, 0, -189.50, -35.05, 20.85, 4500, 950, 13000, -150]
    let balance = 0;
    let numTxn = 0;

    for (let i=0; i<10; i++) {
        
        let randName = names[Math.floor(Math.random() * 11)]
        let randCategory = categories[Math.floor(Math.random() * 11)]
        let randAmount = amounts[Math.floor(Math.random() * 11)]
        let type = randAmount <= 0 ? "Expense" : "Deposit";
        
        let result = (Math.round(balance * 100)/100) + (Math.round(randAmount * 100)/100);
        balance = (result % 1 != 0) ? result.toFixed(2) : result;
        
        // fill out transaction form

        cy.get('[data-cy="txn-name"]').type(randName)
        cy.get('[data-cy="txn-category"]').select(randCategory)
        cy.get('[data-cy="txn-type"]').select(type)
        cy.get('[data-cy="txn-amount"]').type(Math.abs(randAmount))
        cy.get('[data-cy="txn-date"]').type('2022-06-13')
        
        // submit form & wait 2s
        
        cy.get('[data-cy="txn-submit"]').click()
        cy.clock().tick(2000)
        
        // expect toastify notification and increment numTxn
        
        cy.get('[data-cy="main-app"]').contains(`${type} Added!`)
        numTxn += 1
    
        // expect balance to be updated
    
        cy.get('[data-cy="account-balance"]').contains(balance)
        
        // wait 2s, and expect <TransactionLog /> to have 1 more child
        
        cy.clock().tick(2000)
        cy.get('[data-cy="txn-log"]').children().should('have.length', numTxn)
    }

    // clean up time baby

    cy.get('[data-cy="delete"]').click({multiple: true, force: true})
    cy.clock().tick(2000)

  });
});


// describe('Test Balance Float Amounts', () => {
//     it('I hate JS IEEE Floats', () => {
//         cy.visit('/')

//         // Fill out form

//         cy.get('[data-cy="txn-name"]').type('test a')
//         cy.get('[data-cy="txn-category"]').select('Childcare')
//         cy.get('[data-cy="txn-type"]').select('Expense')
//         cy.get('[data-cy="txn-amount"]').type(Math.abs(0.05))
//         cy.get('[data-cy="txn-date"]').type('2022-06-13')
//         cy.get('[data-cy="txn-submit"]').click()
//         cy.clock().tick(2000)
//         cy.get('[data-cy="main-app"]').contains('Expense Added!')
//         cy.get('[data-cy="account-balance"]').contains(0.05)
//         cy.clock().tick(2000)
//         cy.get('[data-cy="txn-log"]').children().should('have.length', 1)

//         cy.get('[data-cy="txn-name"]').type('test b')
//         cy.get('[data-cy="txn-category"]').select('Education')
//         cy.get('[data-cy="txn-type"]').select('Deposit')
//         cy.get('[data-cy="txn-amount"]').type(Math.abs(0.06))
//         cy.get('[data-cy="txn-date"]').type('2022-06-13')
//         cy.get('[data-cy="txn-submit"]').click()
//         cy.clock().tick(2000)
//         cy.get('[data-cy="main-app"]').contains('Deposit Added!')
//         cy.get('[data-cy="account-balance"]').contains(0.01)
//         cy.clock().tick(2000)
//         cy.get('[data-cy="txn-log"]').children().should('have.length', 2)
//     })
// })