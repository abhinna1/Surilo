

context('login with right credentials', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("manandharabhinna@gmail.com")
        cy.get('#password').type("abhi1234")
        cy.get(".reg-btn").click()
        cy.get(".homeContainer")
    })
  })

  context('login with wrong credentials', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("h12@gmail.com")
        cy.get('#password').type("hi123")
        cy.get(".reg-btn").click()
        cy.get(".homeContainer")
    })
  })


 
