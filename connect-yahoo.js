var _ = require('lodash');
var async = require('async');
var client = require('cheerio-httpcli');
client.setBrowser('chrome');

var yahooUrlTmpl = _.template('http://search.yahoo.co.jp/search?p=<%= word %>&ei=UTF-8&pstart=1&b=<%= offset %>');

module.exports = function(word, offset, callback) {
	var url = yahooUrlTmpl({word: word, offset: offset});
	client.fetch(url, {}, callback);
};