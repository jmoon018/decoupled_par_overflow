app.controller("UsersProfileCtrl", function($scope, $http, $routeParams, sessionService) {

  user_id = $routeParams.id;

  $http.get("/api/users/" + user_id + "/questions").
  success(function(data) {
    console.log("Successfully got the questions from user: " + user_id);
    $scope.questions = data;
  }).
  error(function(data) {
    console.log("Did not get the questions from the user: " + user_id);
  });

});

