/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var Todo = require('mongoose').model('Todo');

exports.list = function(req, res, next) {	
	Todo.find({}, function(err, todos) {
		if(err) {
			return next(err);
		}
		else {
			res.json(todos);
		}
	});
};

exports.create = function(req, res, next) {
	Todo.create({
		text : req.body.text,
    done : false
	}, function(err, todos) {
		if(err) {
			return next(err);
		}
		else {
			Todo.find({}, function(err, todos) {
		    if(err) {
			    return next(err);
		    }
		    else {
			    res.json(todos);
		    }
	    });
		}
	});
};

exports.delete = function(req, res, next) {
	Todo.remove({
		_id: req.params.todo_id
	}, function(err, todos) {
		if(err) {
			return next(err);
		}
		else {
			Todo.find({}, function(err, todos) {
		    if(err) {
			    return next(err);
		    }
		    else {
			    res.json(todos);
		    }
	    });
		}
	});
};