
  
/// <reference types="Cypress" />
describe('Login', function() {

    //code for Amazon EndtoEnd 
    
    it('Amazon-End to End', function() {
    
        cy.visit("https://amazon.com")

       
    cy.get('#twotabsearchtextbox').type('headphones')
    cy.wait(1000)
    cy.get('.nav-search-submit  .nav-input').click()
    cy.wait(1000)
    cy.get('section[aria-label="4 Stars & Up"]').click({force:true})
    cy.contains('Sony').click()
    cy.get('.sg-row').find('.s-image').eq(1).click()
    cy.contains('Add to Cart').click()
  
    
    cy.go('back')


   
  })

})