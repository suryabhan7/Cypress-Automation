///<reference types="cypress"/>


import signin from './signin';

describe('Test Suite',()=>{
    it('Sign in Test',()=>{

        const si = new signin()
        si.visit()
        //SI.button()
        si.fillemail('suryabhansingh1998@gamil.com')
        si.fillPassword('password')
        si.login()
        cy.title().should('be.equal','Log in to Facebook');
       
    })
    it.skip('Create new contact',()=>{


    })
})
