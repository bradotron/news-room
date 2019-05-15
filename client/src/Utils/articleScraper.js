// cheerio is our scraping tool
var cheerio = require('cheerio');

export default {
	scrape: function(data) {
		var $ = cheerio.load(data);
		var articles = [];

		// Now, we grab every h2 within an article tag, and do the following:
		$('ol li').each(function(i, element) {
      console.log(this);
			// Save an empty result object
			var result = {};

			// Add the text and href of every link, and save them as properties of the result object
			result.title = $(this)
				.children('h4')
				.text();

			articles.push(result);
		});

		return articles;
	},
};
