app.controller("HeaderCtrl", function($scope) {
  if (!sessionStorage.user_name) {
    console.log("No user in session.");
    sessionStorage.user_name = "";
  }
  $scope.greeting = sessionStorage.user_name;
  console.log("Greeting: " + $scope.greeting);

  console.log("trying to get the session storage user: " + sessionStorage.user_name);
});
