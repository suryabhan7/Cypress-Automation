///<reference types="cypress"/>






describe('Automation of Contact us Test cases',()=>{
    it('Automation of contact us form',()=>{

        cy.visit('http://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="first_name"]').type('suryabhan')
        cy.get('[name="last_name"]').type('singh')
        cy.get('[name="email"]').type('suryabhansingh1998@gmail.com')
        cy.get('textarea.feedback-input').type('about reviews')
        cy.get('[type="submit"]').click();
        cy.end()
    })

    it.skip('Practice new tab',()=>{

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

