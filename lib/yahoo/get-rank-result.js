var connectYahoo = require('./connect-yahoo');
var async = require('async');

module.exports = function(word, offsets, callback) {
	var rank = 1;
	var results = [];
	async.eachSeries(offsets, function(offset, next) {
		connectYahoo(word, offset, function(err, $, res) {
			if (err) return next(err);
			$('#WS2m .w .hd').each(function(i, searchResult) {
				var $a = $(searchResult).find('h3 a');
				results.push({rank: rank, url: $a.attr('href')});
				rank++;
			});
			next();
		});
	}, (err) => {
		if (err) return callback(err, null);
		callback(null, results);
	});
};