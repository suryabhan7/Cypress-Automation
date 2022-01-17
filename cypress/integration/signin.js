///<reference types="cypress"/>


class signin 
{

    visit()
    {
        cy.visit("www.facebook.com");
    }

    // signin(){
    //    const button = cy.get('.login')
    //    button.click()
    // }
     fillemail(value){
        const field= cy.get('#email')
        field.clear
        field.type(value)
        return this
     }

     fillPassword(value){
        const field= cy.get('#pass')
        field.clear
        field.type(value)
        return this
     }

     login(){
         const button= cy.get('[name=login]')
         button.click()
     }
   
}
export default signin