'use strict';

angular.module("Reactify", [
    "ngReact",
])
.controller("MainCtrl", function ($scope, $timeout) {
    $scope.angularItems = [];
    $scope.reactItems = [];
    $scope.amount = 1000;
    $scope.updateTime = "-";
    
    function createItems() {
        var items = [];        
        for (var i = 0; i < $scope.amount; i++) {
            items.push({
                prop1: i,
                prop2: "X",
                prop3: "Y",
                prop4: "Z",
                prop5: new Date().toString(),
                prop6: null
            });
        }        
        return items;
    }

    $scope.populateAngular = function () {    
        $scope.clearItems();
        $scope.angularItems = createItems();
        
        var startTimeList = new Date().getTime();
        $timeout(function () {
            var time = (new Date().getTime() - startTimeList) + " ms";
            $scope.setUpdateTime(time);
            console.log("ANGULAR - List updated in: " + time);
        });
    }
    
    $scope.populateReact = function () {    
        $scope.clearItems();
        $scope.reactItems = createItems();
    }
    
    $scope.clearItems = function () {
        $scope.angularItems = [];
        $scope.reactItems = [];     
        $scope.updateTime = "-";
    };
    
    $scope.setUpdateTime = function (time) {
        $scope.updateTime = time;
    }
    
    $scope.showUpdateTime = function () {
        return $scope.angularItems.length > 0 || $scope.reactItems.length > 0;
    }
});