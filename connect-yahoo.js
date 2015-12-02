var _ = require('lodash');
var async = require('async');
var client = require('cheerio-httpcli');
client.setBrowser('chrome');

var yahooUrl = function(word, offset) {
	return ['https://search.yahoo.co.jp/search?p=', encodeURIComponent(word), '&ei=UTF-8&pstart=1&b=', offset].join('');
};

module.exports = function(word, offset, callback) {
	var url = yahooUrl(word, offset);
	client.fetch(url, {}, callback);
};