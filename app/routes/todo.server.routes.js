/*Database manipulations are performed based on where the page is directed to.
  Serves as a backend manipulation - creating, deleting, or listing data.*/

var todo = require('../../app/controllers/todo.server.controller')

module.exports = function(app) {
	app.route('/api/todos')
		.post(todo.create)
		.get(todo.list);
		
	app.route('/api/todos/:todo_id')
		.delete(todo.delete);
};