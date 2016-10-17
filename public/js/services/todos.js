//Interacts with Node API to create, get, and delete data from database.
angular.module('todoService', [])
  // super simple service
  // each function returns a promise object 
  .factory('Todos', function($http) {
    return {
      get : function() {
        return $http.get('/api/todos');
      },
      create : function(todoData) {
        return $http.post('/api/todos', todoData);
      },
      delete : function(id) {
        return $http.delete('/api/todos/' + id);
      }
    }
});