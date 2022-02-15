/// <reference types="cypress" />


it('google tes', function() {

    cy.visit('https://google.com') 
    cy.get('.gLFyf').type("Sanif Hero{enter}")


})