app.controller('MainController', ['$scope', $scope => {
    $scope.list = ['task 1', 'task 2', 'task 3'];
    $scope.addItem = () => {
        $scope.list.push($scope.addToDo);
    }
}]);