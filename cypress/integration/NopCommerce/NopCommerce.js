/// <reference types="cypress" />

describe('User registration',() =>{

    beforeEach('User webpage',() =>{
        cy.visit('https://demo.nopcommerce.com')
    })

    it('User Registration',()=>{
        cy.contains('Register').should('be.visible').click();
        cy.get('#gender-male').should('be.visible').should('not.be.checked').click();
        cy.get('#FirstName').type('Suryabhan');
        cy.get('#LastName').type('Singh');
        cy.get('[name="DateOfBirthDay"]').select('26');
        cy.get('[name="DateOfBirthMonth"]').select('August');
        cy.get('[name="DateOfBirthYear"]').select('1998');
        cy.get('#Email').should('be.visible').type('email8@gmail.com');
        cy.get('#Password').should('be.visible').type('Lxg7iJQrict@VE7');
        cy.get('#ConfirmPassword').should('be.visible').type('Lxg7iJQrict@VE7');
        cy.get('#register-button').click();
        //cy.get('.result').should('eq', 'Your registration completed');
        cy.contains('Your registration completed').should('be.visible')
        });

        

        it('User login',()=>{
            cy.get('.ico-login').should('be.visible').click();
            cy.get('#Email').should('be.visible').type('email8@gmail.com');
            cy.get('#Password').should('be.visible').type('Lxg7iJQrict@VE7');
            cy.get('form > .buttons > .button-1').click();
            cy.get('.ico-logout').should('be.visible');
        });

        it('Change Currency',() =>{
            cy.get('#customerCurrency').should('be.visible').select('Euro').should('be.visible');
            //cy.get('#gift aid').should('be.visible').should('be', '€25 Virtual gift card');
        });

        it('Predicted text search', () =>{
            cy.get('#small-searchterms').type('mac');
            cy.contains('Apple MacBook Pro 13-inch').click();
            
            //cy.contains('mac').select('Apple MacBook Pro 13-inch');
            //cy.contains('Apple MacBook Pro 13-inch').should('be', 'Apple MacBook Pro 13-inch');
            cy.get('#add-to-cart-button-4').click();
            cy.go('back');
            cy.get('#topcartlink').click();
           // cy.get(".product-unit-price").should('contain', '$1,800,00');
            cy.get(".qty-input").clear().type('4');
            cy.get(".update-cart-button[name=updatecart]").click();
            cy.get(".value-summary > strong")
                .should(($total)=>{
                expect($total).to.contain('$7,200.00')
            })

        })
        
            



})