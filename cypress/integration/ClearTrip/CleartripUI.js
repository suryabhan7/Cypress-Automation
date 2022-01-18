///<reference types ="cypress"/>

describe("ClearTrip UI",()=>{

    before(()=>{
       // cy.visit("https://www.cleartrip.com/");
       cy.log("executing once before all Testcase");  
    })
    after(()=>{
        // cy.visit("https://www.cleartrip.com/");
        cy.log("executing once After all Testcase");  
     })
 

    beforeEach(()=>{
       // cy.visit("https://www.cleartrip.com/");
       cy.log("executing before each Testcase");  
    })

    // afterEach(()=>{
    //     cy.log("executing After each Testcase");  
    //  })
    // it("Test Case1",()=>{
    //     cy.log("Executing test case 1")
    // });
    // it("Test Case2",()=>{
    //     cy.log("Executing test case 2")
    // });
    // it("Test Case3",()=>{
    //     cy.log("Executing test case 3")
    // });
    // it("Test Case3",()=>{
    //     cy.log("Executing test case 4")
    // });
    // it("Title vaildation",()=>{
    //     cy.title().should("be.equal",'#1 Site for Booking Flights, Hotels, Packages, Trains & Local activities.');
        
    // });

    // it("Header vaiddation",()=>{
    //     cy.get('[class="p-relative mr-4"]').click();
    // });

    // it.only("Check Box",()=>{
    //     cy.get("[type='radio']").should("have.length",0);
    // })

     it.only("Mouse trigger",()=>{
         cy.visit("www.flipkart.com")
        cy.get(".exehdJ").trigger('mouseover');
     })

})