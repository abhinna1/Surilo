

context('Registration with already existing email', () => {

    it.only('register',function(){

        cy.visit('http://localhost:3000/register')
        cy.get('#username').type("Surilo")
        cy.get('#email').type("testuser12456@gmail.com")
        cy.get('#password').type("testpass1234")
        cy.get('#confirmPassword').type("testpass1234")
        cy.get(".next-btn").click()
        cy.get('#firstName').type("Surilo")
        cy.get('#lastName').type("User")
        cy.get('#dob').type('2019-03-14') 
        cy.get('input[value="male"]').click()
        cy.get(".reg-btn").click()

    })
  })


  // context('Registration with new email', () => {

  //   it.only('register',function(){

  //       cy.visit('http://localhost:3000/register')
  //       cy.get('#username').type("Sanif")
  //       cy.get('#email').type("saniif@gmail.com")
  //       cy.get('#password').type("Hello987&")
  //       cy.get('#confirmPassword').type("Hello987&")
  //       cy.get(".next-btn").click()
  //       cy.get('#firstName').type("Sanif")
  //       cy.get('#lastName').type("Kandel")
  //       cy.get('#dob').type('2020-12-02') 
  //       cy.get('input[value="male"]').click()
  //       cy.get(".reg-btn").click()

  //   })
