var async = require('async');
var _ = require('lodash');

var getSearchResultNumber = require('./get-search-result-number');
var getAllInTitleSearchResultNumber = require('./get-all-in-title-search-result-number');
var getRankResult = require('./get-rank-result');

module.exports = function(word, page, callback) {
	var data = {
		searchInfo: {
			num: 0,
			allInTitleNum: 0,
			searchVolume: 0,
			searchWord: word
		},
		searchResults: []
	};
		
	var tasks = [];
	tasks.push(function(next) {
		getSearchResultNumber(word, function(err, num) {
			if (err) return next(err);
			data.searchInfo.num = num;
			next();
		});
	});
	tasks.push(function(next) {
		getAllInTitleSearchResultNumber(word, function(err, num) {
			if (err) return next(err);
			data.searchInfo.allInTitleNum = num;
			next();
		});
	});
	tasks.push(function(next) {
		var pages = _.range(1, ((page - 1) * 10 + 2), 10);
		var offsets = _.map(pages, function(num) { return num.toString(); });
		getRankResult(word, offsets, function(err, results) {
			if (err) return next(err);
			data.searchResults = results;
			next();
		});
	});
	async.parallel(tasks, function(err) {
		if (err) return callback(err, null);
		callback(null, data);
	});
};


