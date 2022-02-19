context('Logout by logged in User', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("manandharabhinna@gmail.com")
        cy.get('#password').type("abhi1234")
        cy.get(".reg-btn").click()
        cy.get(".user-image").click()
        cy.get(".login-link").click()
        cy.get(".usrEnt")

    })
  })