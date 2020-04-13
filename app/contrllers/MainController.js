app.controller('MainController',['$scope', $scope => {
    $scope.list = [];
    $scope.addEvent = () => {
        $scope.list.push({event:$scope.addOrganize,complete:false});
    };
    $scope.removeEvent = () => {
        let oldList = $scope.list;
        $scope.list = [];
        angular.forEach(oldList, (checked) => {
            if (!checked.done) $scope.list.push(checked);
        });
    }
}]);