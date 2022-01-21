///<reference types="cypress"/>
import contactData from '../../fixtures/ContactFormData.json'

describe('Automation of Contact us Test cases',()=>{
    it.only('Automation of contact us form',()=>{

        cy.visit('http://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="first_name"]').type(contactData.firstname);
        cy.get('[name="last_name"]').type(contactData.lastname)
        cy.get('[name="email"]').type(contactData.email)
        cy.get('textarea.feedback-input').type(contactData.discription)
        cy.get('[type="submit"]').click();
        cy.end()
    })

    it('Practice new tab',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').click()
        cy.end()
    })
    
    it('Cypress basic commands',()=>{

        cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')
      // cy.contains('Day').click()
       cy.get('[name="continents"]').select('North America');
       cy.get('[name="firstname"]').type("surya");
       cy.get('[name="lastname"]').type('singh');
       cy.get('[value="Male"]').click();


    })
    })

