app.controller("UsersLoginCtrl", function ($scope, $http, $routeParams) {
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
      $scope.display = ("Hi, " + data.name)
      sessionStorage.user_id = data.id;
      sessionStorage.user_name = data.name;
      //$scope.$apply(function(){
        //$scope.greeting = "LLLLLLLLLL";
      //});
      console.log("trying to select");
      var elemScope = angular.element("#greetingTag").scope();
      console.log("whatwhathwt");
      var elem
    }).
    error(function(data){
      console.log('unable to usersLogin')
      $scope.display = "something went wrong :("
    });
  };

});
