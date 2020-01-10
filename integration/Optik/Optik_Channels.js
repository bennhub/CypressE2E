describe('Optik Channels', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//lands back on home page
//Go to Pik plans 
cy.get('[data-qa=button-optik]').click()
        .wait(2000)

//Click on Themepack and channels tab
cy.contains('Theme packs and channels').click()
        .wait(7000) 

//Opens FAQ
cy.contains('Frequently Asked Questions').click()
.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
//cy.compareSnapshot("Optik Channels");
cy.matchImageSnapshot("Optik Channels");


    })
  })
  