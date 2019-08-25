

describe('Product box', () => {

it('Effect on mouse hover', ()=> {
	cy.visit('https://www.xxxlutz.se/vardagsrum-C1');
	cy.xpath('//*[@id="main"]/section/div[4]/article[1]').trigger('mouseover');
	
	expect('//*[@id="main"]/section/div[4]/article[1]/div[1]').to.exist;

})

});