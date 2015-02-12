angular.module('starter.controllers', [])

// .controller('DashCtrl', function($scope, $http) {
//  $http.get("http://localhost:9000/api/things").then(function (thing){
//   console.log(thing)
//  })
// })

.controller('LoginCtrl', function($scope, $window, $rootScope) {
   $scope.loginOauth = function(provider) {

      $window.location.href = 'http://localhost:9000/auth/' + provider;
    };

    $rootScope.hideNav = true;

})
// .controller('SavedCtrl', function ($scope, SaveJobs) {
//   SaveJobs.populateJobs().then(function (data) {
//     console.log(data, 'dataaaaaa')
//     $scope.savedJobs = data.data.jobs_saved
//   })

// })

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
