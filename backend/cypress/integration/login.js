

context('login with right credentials', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("sanifkandel12345@gmail.com")
        cy.get('#password').type("s@nif123")
        cy.get(".reg-btn").click()
        cy.get(".success").click()
    })
  })

  context('login with wrong credentials', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("h12@gmail.com")
        cy.get('#password').type("hi123")
        cy.get(".reg-btn").click()
        cy.get(".success").click()
        cy.get
    })
  })


 
