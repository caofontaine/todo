/*Defines schema for the data being created or called for/from the database.*/

var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: String
});