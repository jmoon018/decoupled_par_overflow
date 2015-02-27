app.controller("UsersIndexCtrl", function($scope, $http, $routeParams) {
  $http.get("http://localhost:3000/api/users").
  success(function(data) {
    console.log("Getting all users -- success");
    $scope.users = data;
  }).
  error(function(data) {
    console.log("Could not get all the users :(");
  });

});
