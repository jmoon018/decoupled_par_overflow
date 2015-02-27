var app = angular.module('ParOverflow', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
    console.log("hitting the route provider")
    $routeProvider.
    when("/questions", {
      templateUrl: "questionsIndex.html",
      controller: "QuestionsIndexCtrl"
    }).
    when("/questions/:id", {
      templateUrl: "questionsShow.html",
      controller: "QuestionsShowCtrl"
    }).
    otherwise({
      redirectTo: "/index.html"
    });
  }
  ]);

// Questions#Index controller
app.controller('QuestionsIndexCtrl', function($scope, $http){
  getQuestions($scope, $http);
  $scope.submitNewQuestion = function() {
    $http.post('/api/questions',
    {
      title: $scope.newQuestionTitle,
      content: $scope.newQuestionContent
    }).
    success(function(data){
      console.log('able to submitNewQuestion.');
    }).
    error(function(data){
      console.log('unable to submitNewQuestion.');
    });
  };

});


// Questions#Show action controller
app.controller("QuestionsShowCtrl", function($scope, $http, $routeParams) {
  console.log("Inside QuestionsShowCtrl");
  getQuestion($scope, $http, $routeParams);
  getAnswers($scope, $http, $routeParams);
  $scope.submitNewAnswer = function() {
    $http.post('/api/questions/'+ $routeParams.id +'/answers',
    {
      title: $scope.newAnswerTitle,
      content: $scope.newAnswerContent
    }).
    success(function(data){
      console.log('able to submitNewAnswer.');
    }).
    error(function(data){
      console.log('unable to submitNewAnswer.');
    });
  };
});

// Functions
function getQuestion($scope, $http, $routeParams) {
  console.log("GETTING QUESTION");
  $http.get('/api/questions/'+$routeParams.id).
  success(function(data){
    console.log('got Question!');
    $scope.question = data
  }).
  error(function(data){
    console.log('failed to getQuestion.');
  })
};

function getAnswers($scope, $http, $routeParams) {
  $http.get('/api/questions/'+$routeParams.id+'/answers').
  success(function(data){
    console.log('able to getAnswers.');
    $scope.answers = data;
  }).
  error(function(data){
    console.log('unable to getAnswers.');
  })
};

function getQuestions($scope, $http) {
  $http.get('/api/questions').
  success(function(data) {
    $scope.questions = data
  }).
  error(function(data) {
    console.log('getQuestions failed')
  })
}
