context('Logout by logged in User', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("surilouser@gmail.com")
        cy.get('#password').type("surilo12345")
        cy.get(".reg-btn").click()
        cy.get(".user-image").click()
        cy.get(".login-link").click()
    })
  })