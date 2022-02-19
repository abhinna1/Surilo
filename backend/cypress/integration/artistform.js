context('Upload with right details', () => {

    it.only('artist',function(){
        cy.visit('/')
        cy.get('#email').type("sanifkandel12345@gmail.com")
        cy.get('#password').type("s@nif123")
        cy.get(".reg-btn").click()
        cy.get(".success").click()
        cy.get(".artistBtn").click()
        cy.get('#artistName').type("Sanif Kandel")
        cy.get('#phoneNumber').type("9864400812")
        cy.get('#documentType').select("Citizenship")
        cy.fixture('people.png', null).then((people) => {
            expect(Cypress.Buffer.isBuffer(people)).to.be.true })
        cy.get(".sub-btn").click()
        

    })
  })

  context('Unregistered User', () => {

    it.only('artist',function(){
        cy.visit('/home')
        cy.get(".artistBtn").click()
        cy.get('#artistName').type("Sanif Kandel")
        cy.get('#phoneNumber').type("9864400812")
        cy.get('#documentType').select("Citizenship")
        cy.fixture('hello.png', null).then((hello) => {
            expect(Cypress.Buffer.isBuffer(hello)).to.be.true
          })
        cy.get(".sub-btn").click()

    })
  })

  context('Upload with empty details', () => {

    it.only('artist',function(){
        cy.visit('/')
        cy.get('#email').type("sanifkandel12345@gmail.com")
        cy.get('#password').type("s@nif123")
        cy.get(".reg-btn").click()
        cy.get(".success").click()
        cy.get(".artistBtn").click()
        cy.get('#artistName').type("Sanif Kandel")
        cy.get('#phoneNumber').type("9864400812")
        cy.get('#documentType').select("Citizenship")
        cy.fixture('hello.png', null).then((hello) => {
            expect(Cypress.Buffer.isBuffer(hello)).to.be.true
          })
        cy.get(".sub-btn").click()

    })
  })

