///<reference types ="cypress"/>

export const CLEARTRIP_LOGO = "[data-test-attrib='cleartrip-logo']"
export const CLEARTRIP_FROM_TO ='[placeholder="Any worldwide city or airport"]'
export const DEPART_ON = '.homeCalender'
export const SEARCH_FLIGHTS_BUTTON = 'button.button'

class homepage{
    //Geter methods
    getClearTripLogo(){
        return cy.get(CLEARTRIP_LOGO)
    }

    getClearTripFrom(){
        return cy.get(CLEARTRIP_FROM_TO).eq(0)
    }

    getClearTripTo(){
        return cy.get(CLEARTRIP_FROM_TO).eq(1)
    }
    
    getSearchFlightsButton(){
        return cy.get(SEARCH_FLIGHTS_BUTTON);
    }

    // Action Methods
    typeFrom(city){
        this.getClearTripFrom().type(city);
    }
 
    typeTo(city){
        this.getClearTripTo().type(city);
    }

    clickSearchFlightsButton(){
        this.getSearchFlightsButton().click();
    }

    verifyClearTripLogo(){
       this.getClearTripLogo().should('be.visible');
    }
}

export default homepage