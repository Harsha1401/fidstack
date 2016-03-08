myApp.controller('headerController', ['$scope', function($scope) {
  $scope.user = {
    name: 'Harsha Vardhan K',
    designation: 'Software Engineer',
    icon: 'dist/img/user2-160x160.jpg',
    notification: [
      {
        description: 'New content added to AngularJS course'
      },
      {
        description: 'Bharath recommended you a course!'
      }
    ]
  };
}]);
