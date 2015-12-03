'use strict';

var expect = require('chai').expect;

var scraper = require('../index');
describe('search-scraper-jp', () => {
	it('yahoo scraper', (done) => {
		scraper.yahoo("マーガリンの塗り方", 2, (err, result) => {
			expect(result.searchInfo.num).to.be.a('number');
			expect(result.searchInfo.allInTitleNum).to.be.a('number');
			expect(result.searchInfo.searchWord).to.be.a('string');
			expect(result.searchResults.length).to.be.a('number');
			done();
		});
	});
	it('page scraper', (done) => {
		var url = 'https://github.com/daikissdd/search-scraper-jp';
		scraper.page(url, (err, result) => {
			expect(result.text).to.be.a('string');
			expect(result.title).to.be.a('string');
			done();
		});
	});
});