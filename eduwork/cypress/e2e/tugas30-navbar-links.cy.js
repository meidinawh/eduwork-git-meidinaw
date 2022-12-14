/// <reference types = "cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible').and('contain.text', 'Online Banking')
        cy.get('.span6 > p').should('be.visible').and('contain.text', 'Pay bills easily')
        cy.get('.hero-unit').should('be.visible')
        cy.get('#nav').should('be.visible')
            .should('contain', 'Home')
            .should('contain', 'Online Banking')
            .should('contain', 'Feedback')
        cy.get('h3').should('contain.text', 'Our Bank is trusted by over 1,000,000 customers world wide.')
        cy.get('#account_summary_link').should('be.visible').and('contain.text', 'Account Summary')
        cy.get('#account_activity_link').should('be.visible').and('contain.text', 'Account Activity')
        cy.get('#transfer_funds_link').should('be.visible').and('contain.text', 'Transfer Funds')
        cy.get('#pay_bills_link').should('be.visible').and('contain.text', 'Pay Bills')
        cy.get('#money_map_link').should('be.visible').and('contain.text', 'My Money Map')
        cy.get('#online_statements_link').should('be.visible').and('contain.text', 'Online Statements')

    }) 
    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible').and('have.text', 'Feedback')
        cy.get('.signin-controls').should('be.visible')
        cy.get('#name').invoke('attr', 'placeholder').should('contain', 'Your Name')
        cy.get('#email').invoke('attr', 'placeholder').should('contain', 'Your email address')
        cy.get('#subject').invoke('attr', 'placeholder').should('contain', 'Subject')
        cy.get('#comment').invoke('attr', 'placeholder').should('contain', 'Type your questions here...')
        cy.get('.btn-signin').should('have.value', 'Send Message')
        cy.get('[type="reset"]').should('have.value', 'Clear')
    })
    it('Should display homepage content', () => {
        cy.get('.brand').click()
        cy.url().should('include', 'index.html')
        cy.get('#nav').should('be.visible')
            .should('contain', 'Home')
            .should('contain', 'Online Banking')
            .should('contain', 'Feedback')
        cy.get('.active > .custom').should('be.visible').and('contain.text', 'Online Banking')
        cy.get('#online_banking_features > :nth-child(1)').should('be.visible')
            .should('contain.text', 'Online Banking')
            .should('contain.text', 'Click the button below to view  online banking features.')
        cy.get('#online_banking_features > :nth-child(2)').should('be.visible')
            .should('contain.text', 'Checking Account Activity')
            .should('contain.text', 'Use Zero to view ')
        cy.get('#online_banking_features > :nth-child(3)').should('be.visible')
            .should('contain.text', 'Transfer Funds')
            .should('contain.text', 'Use Zero to safely')
        cy.get('#online_banking_features > :nth-child(4)').should('be.visible')
            .should('contain.text', 'My Money Map')
            .should('contain.text', 'Use Zero to set up')


    })
})