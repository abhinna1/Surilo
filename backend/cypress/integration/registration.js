context('Registration', () => {

    it.only('register',function(){
        
        cy.visit('http://localhost:3000/register')
        cy.get('#username').type("Sanif")
        cy.get('#email').type("saniff@gmail.com")
        cy.get('#password').type("Hello987&")
        cy.get('#confirmPassword').type("Hello987&")
        cy.get(".next-btn").click()
        cy.get('#firstName').type("Sanif")
        cy.get('#lastName').type("Kandel")
        cy.get('#dob').type('2020-12-02') 
        cy.get('input[value="male"]').click()
        cy.get(".reg-btn").click()

    })
  })
