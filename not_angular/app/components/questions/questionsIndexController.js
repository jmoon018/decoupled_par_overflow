// Questions#Index controller
app.controller('QuestionsIndexCtrl', ['$scope', '$http', 'sessionHelpers', function($scope, $http, sessionHelpers) {

  $scope.isLoggedIn = sessionHelpers.isLoggedIn();

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
      user_id: sessionStorage.user_id,
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

}]);
