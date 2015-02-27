// Questions#Index controller
app.controller('QuestionsIndexCtrl', function($scope, $http){

  function getQuestions() {
    $http.get('http://localhost:3000/api/questions').
    success(function(data) {
      $scope.questions = data
    }).
    error(function(data) {
      console.log('getQuestions failed')
    })
  };

  getQuestions();
  $scope.submitNewQuestion = function() {
    $http.post('http://localhost:3000/api/questions',
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
