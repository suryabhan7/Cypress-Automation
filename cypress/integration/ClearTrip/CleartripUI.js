///<reference types ="cypress"/>

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
     it("Date picker",() =>{
        cy.visit("http://www.makemytrip.com");
        cy.contains("DEPARTURE").click();

     })

})
   