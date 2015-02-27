app.config(['$routeProvider',
  function ($routeProvider) {
    console.log("hitting the route provider")
    $routeProvider.
    when("/questions", {
      templateUrl: "/app/components/questions/questionsIndex.html",
      controller: "QuestionsIndexCtrl"
    }).
    when("/questions/:id", {
      templateUrl: "/app/components/questions/questionsShow.html",
      controller: "QuestionsShowCtrl"
    }).
    when("/login", {
      templateUrl: "/app/components/users/usersLogin.html",
      controller: "UsersLoginCtrl"
    }).
    when("/users/:id", {
      templateUrl: "/app/components/users/usersProfile.html",
      controller: "UsersProfileCtrl"
    }).
    when("/users", {
      templateUrl: "/app/components/users/usersIndex.html",
      controller: "UsersIndexCtrl"
    }).
    otherwise({
      redirectTo: "/index.html"
    });
  }
  ]);
