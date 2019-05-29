var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},

	image: {
		type: String,
	},

	summary: {
		type: String,
	},

	url: {
		type: String,
		required: true,
	},

	source: {
		type: String,
	},
	
	date: { 
		type: Date, 
		default: Date.now 
	  },

	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],

	thumbsUps: {
		type: Number,
	},

	thumbsDowns: {
		type: Number,
	},
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model('Article', articleSchema);

// Export the Article model
module.exports = Article;
