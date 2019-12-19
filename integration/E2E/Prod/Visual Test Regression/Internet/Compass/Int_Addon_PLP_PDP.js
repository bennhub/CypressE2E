describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {

//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//visit internet Addons PLP
cy.visit('https://www.telus.com/en/shop/home/internet/addons')

//Opens FAQ section
//cy.contains('Frequently Asked Questions').click()
         //.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 
//snapshots page for comparison
cy.compareSnapshot("Int_Addon_PLP");
cy.percySnapshot("Int_addon_PLP");

//visit internet Addon Telus Boost PDP
cy.visit('https://www.telus.com/en/shop/home/product/telus-boost-wi-fi-starter-pack')

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.compareSnapshot("Int_Addon_TB_PDP");
cy.percySnapshot("IntAddon_TB_PDP");



    })
  })
  