

describe('Filters', () => {


	it('One filter', ()=> {
		cy.visit('https://www.xxxlutz.se/vardagsrum-C1');

		cy.xpath('//*[@id="main"]/section/div[3]/div[1]/div/div[2]/ul/li[1]').click();
		cy.xpath('//*[@id="filter-control_bestprice"]').check({force:true});

		cy.get('.Chip__container').should('have.text', 'Best Price');
	    cy.get('.Container__default').find('article').should('have.length', 36);
	});
});