import HomePage from '../../pages/HomePage'
import Cleartripdata from '../../fixtures/ClearTripTestData.json'
const homepage = new HomePage();
 
describe('Testing ClearTrip Website',()=>{
    it('Testcase1 - Search A Flight',()=>{
        cy.visit("https://cleartrip.com/")
        homepage.verifyClearTripLogo();
        homepage.verifySearchFlightText();
        homepage.verifyRadioButtons();
        homepage.clickRoundTrip();
        homepage.typeFrom(Cleartripdata.From);
        homepage.typeTo(Cleartripdata.To);
        homepage.clickDepartOn();
        homepage.clickMoreOptions();
        homepage.clickClassOfTravel();
        homepage.verifyClassList();
        homepage.clickAdults();
        homepage.verifyAdultsList();
        homepage.clickSearchFlightsButton(); 
        homepage.verifySearchFlightText();   
    });
});