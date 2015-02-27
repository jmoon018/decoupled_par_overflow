app.controller("UsersProfileCtrl", function($scope, $http, $routeParams) {

  user_id = $routeParams.id;

  $http.get("http://localhost:3000/api/users/" + user_id + "/questions").
  success(function(data) {
    console.log("Successfully got the questions from user: " + user_id);
    $scope.questions = data;
  }).
  error(function(data) {
    console.log("Did not get the questions from the user: " + user_id);
  });

});

