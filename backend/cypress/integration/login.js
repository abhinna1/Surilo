

context('login with right credentials', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("surilouser@gmail.com")
        cy.get('#password').type("surilo12345")
        cy.get(".reg-btn").click()
    })
  })

  context('login with wrong credentials', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("h12@gmail.com")
        cy.get('#password').type("hi123")
        cy.get(".reg-btn").click()
    })
  })


 
