///<reference types ="cypress"/>

describe("ClearTrip UI",()=>{

    before(()=>{
        cy.log("executing once before all Testcase");  
    })
    after(()=>{
        cy.log("executing once After all Testcase");  
     })
 
    beforeEach(()=>{
        cy.log("executing before each Testcase");  
    })

    afterEach(()=>{
         cy.log("executing After each Testcase");  
    })
    it("Test Case1",()=>{
         cy.log("Executing test case 1")
    });
    it("Test Case2",()=>{
         cy.log("Executing test case 2")
    });
    it("Test Case3",()=>{
        cy.log("Executing test case 3")
    });
    it("Test Case3",()=>{
         cy.log("Executing test case 4")
    });
});