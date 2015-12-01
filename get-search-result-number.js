var connectYahoo = require('./connect-yahoo');

module.exports = function(word, callback) {
	connectYahoo(word, '1', function(err, $, res, html) {
		if (err) return callback(err, null);
		var searchNumber = $('.resultNum span').text();
		var num = (!searchNumber) ? 0: searchNumber.split(',').join('') * 1;
		return callback(null, num);
	});
};