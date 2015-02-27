// Questions#Show action controller
app.controller("QuestionsShowCtrl", function($scope, $http, $routeParams) {
  console.log("Inside QuestionsShowCtrl");

  function getQuestion() {
    console.log("GETTING QUESTION");
    $http.get('http://localhost:3000/api/questions/'+$routeParams.id).
    success(function(data){
      console.log('got Question!');
      $scope.question = data
    }).
    error(function(data){
      console.log('failed to getQuestion.');
    })
  };


  getQuestion();

  function getAnswers() {
    $http.get('http://localhost:3000/api/questions/'+$routeParams.id+'/answers').
    success(function(data){
      console.log('able to getAnswers.');
      $scope.answers = data;
    }).
    error(function(data){
      console.log('unable to getAnswers.');
    })
  };

  getAnswers();

  $scope.submitNewAnswer = function() {
    $http.post('http://localhost:3000/api/questions/'+ $routeParams.id +'/answers',
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

  $scope.upvoteQuestion = function() {
    $http.post("http://localhost:3000/api/questions/" + $routeParams.id+"/upvote").
    success(function() {
      $scope.question.vote_count++;
    });
  };

  $scope.downvoteQuestion = function() {
    $http.post("http://localhost:3000/api/questions/" + $routeParams.id+"/downvote").
    success(function() {
      $scope.question.vote_count--;
    });
  };

  $scope.upvoteAnswer = function(index) {
    $http.post("http://localhost:3000/api/questions/"+$routeParams.id+"/answers/"+$scope.answers[index].id + "/upvote").
    success(function(){
      console.log("Successfully upvoted an answer");
      $scope.answers[index].vote_count++;
    }).
    error(function() {
      console.log("Could not upvote an answer");
      $scope.answers[index].vote_count--;
    });
  };

 $scope.downvoteAnswer = function(index) {
    $http.post("http://localhost:3000/api/questions/"+$routeParams.id+"/answers/"+$scope.answers[index].id + "/downvote").
    success(function(){
      console.log("Successfully downvote an answer");
      $scope.answers[index].vote_count--;
    }).
    error(function() {
      console.log("Could not downvote an answer");
      $scope.answers[index].vote_count++;
    });
  };

});
