search-scraper-jp
---

## search engine & page content scrapping

use 

```
var scraper = require('../index');

scraper.yahoo("マーガリンの塗り方", 2, (err, result) => {
	console.log(result);
});

var url = 'https://github.com/daikissdd/search-scraper-jp';
scraper.page(url, (err, result) => {
	console.log(result);
});
```