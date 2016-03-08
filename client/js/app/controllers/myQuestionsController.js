myApp.controller('myQuestionsController', ['$scope','$timeout','Question', function($scope,$timeout,Question) {
  $scope.pageTitle = "My Questions";
  $scope.questions=[];

  function getQuestions() {
        Question
          .find()
          .$promise
          .then(function(questions) {
            $scope.questions = questions;
          });
      }
  getQuestions();
}]);
