myApp.controller('notificationsController',['$scope','$timeout','Question', function($scope,$timeout,Question){
  $scope.pageTitle = "Notifications";
  $scope.questions=[];


  $scope.notifiedQuestions=[1,5];


  function getQuestions(qid) {
        Question
          .findById({id:qid})
          .$promise
          .then(function(questions) {
            //console.log(questions);
            $scope.questions.push(questions);

          });

      }

  for(var i=0;i<$scope.notifiedQuestions.length;i++){
  //  console.log($scope.notifiedQuestions[i]);
      getQuestions($scope.notifiedQuestions[i]);
    }
}]);
