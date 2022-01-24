describe('mouse over feature', ()=>{


    it('click on Sign Up Link Test', ()=>{
        cy.visit('https://www.spicejet.com/')
        cy.get('.r-r19jdo > .css-1dbjc4n > [data-testid="svg-img"]').click();
        cy.contains('Add-ons').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
    })

    it('click on Member Login Link Test', ()=>{
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Member Login').click()
    })


    





})