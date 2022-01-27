///<reference types ="cypress"/>

describe("test suite",()=>{
    it("visit",()=>{
        cy.visit("http://www.amazon.com");
        //cy.title().should('be.equal','Log in to FOnline Bus Tickets Booking: Book Bus Ticket and Bus Reservation -redBus Indiaacebook');
       // cy.get()
       cy.contains('Sell').click();
       cy.go()
})
})