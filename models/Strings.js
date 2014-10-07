var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

StringSchema = new Schema({
	_id: {type: String},
	meta:{
		dateCreated: {type: Date},
		dateUpdated: {type: Date},
		userCreated: {type: Schema.Types.ObjectId},
	},
	attributes: {
		string: {type: String},
		tags: [ {type : mongoose.Schema.ObjectId, ref : 'Tag'} ]
	}
});

mongoose.model('String', StringSchema);