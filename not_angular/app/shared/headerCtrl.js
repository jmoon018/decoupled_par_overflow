app.controller("HeaderCtrl", function($scope, sessionService) {
  if (!sessionService.session.user) {
    console.log("No user in session.");
    sessionService.session["user"] = {name: ""};
  }
  $scope.greeting = sessionService.session.user.name;
});
