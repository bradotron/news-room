var axios = require('axios');
var cheerio = require('cheerio');

module.exports = {
	searchNYT: function(search) {
		return new Promise(function(resolve, reject) {
			axios(`https://www.nytimes.com/search?query=${search}&sort=newest`)
				.then(res => {
					resolve(scrapeNytResults(res.data));
				})
				.catch(err => reject(err));
		});
	},

	searchTest: function(search) {
		return new Promise(function(resolve, reject) {
			axios(
				`https://news.search.yahoo.com/search?p=${search}&fr=uh3_news_vert_gs&fr2=p%3Anews%2Cm%3Asb&guccounter=1&guce_referrer=aHR0cHM6Ly9uZXdzLnlhaG9vLmNvbS8&guce_referrer_sig=AQAAAAVAUxfLD0T5afOWFLXEB532GVpQWeAyOFo4ThG8JNh2T4fHYDbcCr-i0yRAgOuiuS7L5pYnNxeqYW2hncLxgb2StjQRpKoS-vGRu_u22WVnQJquYgRIVx7mx2PJYkZCrC5Bc7soSe2uQ0yzdxP8RGVuMWwA8GFLHSbn1kkNj2tb`
			)
				.then(res => {
					resolve(scrapeTestResults(res.data));
				})
				.catch(err => reject(err));
		});
	},
};

const scrapeNytResults = function(data) {
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
			result.source = `New York Times`;
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
};

const scrapeTestResults = function(data) {
	var $ = cheerio.load(data);
	var articles = [];
	// Now, we grab every article tag, and do the following:
	$('li div.NewsArticle').each(function(i, el) {
		let result = {};
		//let title = '';
		let anchor = $(el).find('a');
		// Title
		result.title = $(anchor).text();

		// // image
		$(el)
			.find('img')
			.each((i, el) => {
				result.image = $(el).attr('data-src');
			});

		// // summary
		result.summary = $(el)
			.find('p')
			.text();

		// // source
		result.source = 'Yahoo';
		// // article url
		result.url = $(anchor).attr('href');

		articles.push(result);
	});

	return articles;
};
