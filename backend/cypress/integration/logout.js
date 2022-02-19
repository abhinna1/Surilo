context('Logout by logged in User', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("sanifkandel12345@gmail.com")
        cy.get('#password').type("s@nif123")
        cy.get(".reg-btn").click()
        cy.get(".success").click()
        cy.get(".user-image").click()
        cy.get(".login-link").click()
    })
  })