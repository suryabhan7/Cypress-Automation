///<reference types ="cypress"/>

import { delay } from "cypress/types/bluebird";

describe("ClearTrip UI",()=>{
   
    //beforeEach(()=>{
     //  cy.visit("https://www.flipkart.com/");
      // cy.log("executing before each Testcase");  
   // })

   
    it("Title vaildation",()=>{
        // cy.title().should("be.equal",'#1 Site for Booking Flights, Hotels, Packages, Trains & Local activities.');
        cy.get('._3704LK').type("Mobiles").type('{enter}');
        cy.get('[title="6 GB & Above"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click();
     });

    // it("Header vaiddation",()=>{
    //     cy.get('[class="p-relative mr-4"]').click();
    // });

     //it.only("Check Box",()=>{
       //  cy.get("[type='radio']").click();
     //})

    // it.only("Mouse trigger",()=>{
      //   cy.visit("www.flipkart.com")
        //cy.get(".exehdJ").trigger('mouseover');
     //})
     it.only("Date picker",() =>{
        cy.visit("http://www.cleartrip.com");
       // cy.get('[placeholder="Any worldwide city or airport"]').eq(0).type('Pune',{ delay: 500 })
        //cy.contains('Suggestions').parent().find("li").eq(0).click()
        //cy.get('.ls-reset > .to-ellipsis').eq(9).trigger('select');//.should("have.text","Pune, IN - Lohegaon (PNQ)")
        //.get('.ls-reset > .to-ellipsis').eq(9).trigger('select');
         cy.get('.radio__circle').eq(1).click() 
        //cy.get('[class="t-all ml-2"]').eq(0).click()
        //cy.contains(30).click()
        //cy.wait(2000)
     })

})
   