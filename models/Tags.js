var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

TagSchema = new Schema({
	_id: {type: String},
	meta:{
		dateCreated: {type: Date},
		dateUpdated: {type: Date},
		userCreated: {type: Schema.Types.ObjectId},
	},
	attributes: {
		tag: {type: String},
		packages: [ {type : mongoose.Schema.ObjectId, ref : 'String'} ]
	}
});

mongoose.model('Tag', TagSchema);