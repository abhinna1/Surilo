
context('login with right credentials', () => {

    it.only('login',function(){
        cy.visit('/')
        cy.get('#email').type("heyy@gmail.com")
        cy.get('#password').type("abhi124")
        cy.get(".reg-btn").click()
    })
  })


 
