// cheerio is our scraping tool
var cheerio = require('cheerio');

export default {
	scrape: function(data) {
		var $ = cheerio.load(data);
		var articles = [];

		// Now, we grab every h2 within an article tag, and do the following:
		$('ol li').each(function(i, el) {
			// console.log(this);
			// Save an empty result object

			if ($(el).attr('data-testid')) {
				var result = {};

				const anchor = $(el).find('a');
				// Title
				$(anchor)
					.find('h4')
					.each((i, el) => {
						result.title = $(el).text();
					});
				// image
				$(el)
					.find('img')
					.each((i, el) => {
						result.image = $(el).attr('src');
					});
				// summary
				$(anchor)
					.find('p')
					.each((i, el) => {
						result.summary = $(el).text();
					});
				// source
				result.source = `nytimes`;
				// article url
				result.url = `https://www.nytimes.com/${$(anchor).attr('href')}`;

				if (result.title) {
					articles.push(result);
				}
			} else {
				console.log('not an article');
			}
		});

		return articles;
	},
};
