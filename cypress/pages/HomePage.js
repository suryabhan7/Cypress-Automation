///<reference types ="cypress"/>

//Css Selectors
export const CLEARTRIP_LOGO = "[data-test-attrib='cleartrip-logo']"
export const ONEWAY = '.radio__circle'
export const CLEARTRIP_FROM_TO ='[placeholder="Any worldwide city or airport"]'
export const DEPART_ON = '.homeCalender'
export const SEARCH_FLIGHTS_BUTTON = 'button.button'

class homepage{
    //Getter methods
    getClearTripLogo(){
        return cy.get(CLEARTRIP_LOGO)
    }

    getOneWay(){
        return cy.get(ONEWAY).eq(1)
    }

    getClearTripFrom(){
        return cy.get(CLEARTRIP_FROM_TO).eq(0).get('li .to-ellipsis')//.contains('Pune, IN - Lohegaon (PNQ)')
    }

    getClearTripTo(){
        return cy.get(CLEARTRIP_FROM_TO).eq(1)
    }
    
    getSearchFlightsButton(){
        return cy.get(SEARCH_FLIGHTS_BUTTON);
    }

    // Action Methods
    clickOneWay(){
        this.getOneWay().click();
    }

    typeFrom(city){
        this.getClearTripFrom().type(city).click();
            
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

    //Verification Methods
}

export default homepage