import axios from 'axios';
import articleScraper from './articleScraper';

export default {
	searchNYT: function(search) {
    return new Promise(function(resolve, reject) {
      axios(`https://www.nytimes.com/search?query=${search}&sort=newest`)
			.then(res => {
				resolve(articleScraper.scrape(res.data));
			})
			.catch(err => reject(err));
    });
}
}
