// describe('The Home Page', () => {
//     it('successfully loads', () => {
//       cy.visit('/')
//     })
//   })

it.only('login',function(){
    cy.visit('/')
    cy.get('#email').type("manandharabhinna@gmail.com")
    cy.get('#password').type("abhi124")
    cy.get(".reg-btn").click()

})