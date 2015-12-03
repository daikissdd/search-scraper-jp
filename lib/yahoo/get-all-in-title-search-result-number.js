var connectYahoo = require('./connect-yahoo');

module.exports = function(word, callback) {
	var searchWord = 'allintitle:' + word;
	connectYahoo(searchWord, '1', function(err, $, res, html) {
		if (err) return callback(err, null);
		var allInTitleSearchNumber = $('.resultNum span').text();
		var num = (!allInTitleSearchNumber) ? 0: allInTitleSearchNumber.split(',').join('') * 1;
		return callback(null, num);
	});
};