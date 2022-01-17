///<reference types ="cypress"/>

describe("ClearTrip UI",()=>{
    beforeEach(()=>{
        cy.visit("https://www.cleartrip.com/");

    })
    it("Title vaildation",()=>{
        cy.title().should("be.equal",'#1 Site for Booking Flights, Hotels, Packages, Trains & Local activities.');
        
    });

    it("Header vaiddation",()=>{
       // cy.get('[xpath="1"]').click();
    })
})