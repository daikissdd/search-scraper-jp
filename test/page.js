'use strict';

var expect = require('chai').expect;
var scraper = require('../index');
var shiromoji = require('shiromoji');

describe('search-scraper-jp', function() {
	it('page scraper', function(done) {
		var url = 'http://www.hero-movie.com/';
		scraper.page(url, function(err, result) {
			console.log(result);
			shiromoji(result.text, function(err, res) {
				console.log(res);
				console.log(shiromoji.count(res));
				console.log(shiromoji.countAll([shiromoji.count(res), shiromoji.count(res)]));
				expect(result.text).to.be.a('string');
				expect(result.title).to.be.a('string');
				done();
			});
		});
	});
});