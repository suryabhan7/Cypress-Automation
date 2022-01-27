import HomePage from '../../pages/HomePage'
import Cleartripdata from '../../fixtures/ClearTripTestData.json'
const homepage = new HomePage();
 
describe('Testing ClearTrip Website',()=>{
    it('Testcase1 - Search A Flight',()=>{
        cy.visit("https://cleartrip.com/")
       
        homepage.verifyClearTripLogo();
       // cy.wait(5000);
        homepage.typeFrom(Cleartripdata.From);
        homepage.typeTo(Cleartripdata.To);
        homepage.clickSearchFlightsButton();
    });
});