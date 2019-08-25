

describe('Search', () => {


	it('Non results', ()=> {
		cy.visit('https://www.xxxlutz.se/vardagsrum-C1');
		cy.get('[type=search]').type('jdsbadehmsak{enter}');

		cy.xpath('//*[@id="main"]/div/h1').should('have.text','Inga resultat hittades för din sökning efter „jdsbadehmsak“');

	});
});