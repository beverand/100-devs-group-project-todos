const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	todo: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true
	},
	userId: {
		type: String,
		required: true
	},
	listName: {
		type: String,
		required: true,
		default: 'uncategorized'
	}
});

module.exports = mongoose.model('Todo', TodoSchema);
