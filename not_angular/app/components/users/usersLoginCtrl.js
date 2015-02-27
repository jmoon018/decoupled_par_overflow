app.controller("UsersLoginCtrl", function ($scope, $http, $routeParams, sessionService) {
  $scope.credentials = {
    // can be username or email
    identifier: "",
    password: ""
  };

  // place to hold greeting or error messages
  $scope.display = ""

  $scope.usersLogin = function (){
    console.log('trying to usersLogin');

    // Submit credentials to database
    $http.post('http://localhost:3000/api/users/login', {
      identifier: $scope.credentials.identifier,
      password: $scope.credentials.password
    }).
    success(function(data){
      console.log('able to usersLogin')
      sessionService.session.user = data
      $scope.display = ("Hi, " + data.name)
      console.log(sessionService.session.user)
    }).
    error(function(data){
      console.log('unable to usersLogin')
      $scope.display = "something went wrong :("
    });
  };

});
