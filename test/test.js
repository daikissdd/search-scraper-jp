'use strict';

var expect = require('chai').expect;
var scraper = require('../index');

describe('search-scraper-jp', function() {
	it('yahoo scraper', function(done) {
		scraper.yahoo("マーガリンの塗り方", 2, function(err, result) {
			expect(result.searchInfo.num).to.be.a('number');
			expect(result.searchInfo.allInTitleNum).to.be.a('number');
			expect(result.searchInfo.searchWord).to.be.a('string');
			expect(result.searchResults.length).to.be.a('number');
			done();
		});
	});
	it('page scraper', function(done) {
		var url = 'https://github.com/daikissdd/search-scraper-jp';
		scraper.page(url, function(err, result) {
			expect(result.text).to.be.a('string');
			expect(result.title).to.be.a('string');
			done();
		});
	});
});