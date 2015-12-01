var yahooRankCrower = require('../index');

yahooRankCrower("GOLFES", 3, (err, result) => {
	console.log(result);
});