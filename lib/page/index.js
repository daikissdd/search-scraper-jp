var client = require('cheerio-httpcli');
client.setBrowser('chrome');

module.exports = function(url, callback) {
	var page = {};
	client.fetch(url, {}, function(err, $, res) {
		if (err) return callback(err, null);
		$('script').remove();
		$('style').remove();
		page.title = $('title').text();
		page.text = (page.title + ' ' + $('body').text()).replace(/\s+/g, ' ');
		return callback(null, page);
	});	
};