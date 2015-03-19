// function centerChangedCallback (scope, map) {
//   return function () {
//     var center = map.getCenter();
//     scope.latitude = center.lat();
//     scope.longitude = center.lng();
//     if(!scope.$$phase) scope.$apply();
//   };
// }
// google.maps.event.addListener(map, 'center_changed', centerChangedCallback(scope, map));
//
// $scope.$watch('latitude + longitude', function (newValue, oldValue) {
//   if (newValue !== oldValue) {
//     var center = map.getCenter(),
//       latitude = center.lat(),
//       longitude = center.lng();
//     if ($scope.latitude !== latitude || $scope.longitude !== longitude)
//       map.setCenter(new google.maps.LatLng($scope.latitude, $scope.longitude));
//   }
// });
