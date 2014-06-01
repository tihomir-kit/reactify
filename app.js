'use strict';

angular.module("Reactify", [
    "ngReact",
])
.controller("MainCtrl", function ($scope, $timeout) {
    $scope.angularItems = [];
    $scope.reactItems = [];
    $scope.amount = 1000;
    $scope.updateTime = "-";
    $scope.watchersCount = 0;
    $scope.isReact = false;

    function createItems() {
        var items = [];
        for (var i = 0; i < $scope.amount; i++) {
            items.push({
                prop1: i,
                prop2: "X",
                prop3: "Y",
                prop4: "Z",
                prop5: Math.floor(Math.random() * 100000) / 100000,
                prop6: {
                    show: false,
                    showHide: "Show",
                    text: "SubItem",
                    counter: 1
                }
            });
        }
        return items;
    }

    function measureTime() {
        var startTimeList = new Date().getTime();
        $timeout(function () {
            var time = (new Date().getTime() - startTimeList) + " ms";
            $scope.setUpdateTime(time);
            $scope.setWatchersCount();
            console.log("ANGULAR - List updated in: " + time);
        });
    }

    $scope.populateAngular = function () {
        $scope.isReact = false;
        $scope.clearItems();
        $scope.angularItems = createItems();
        measureTime();
    };

    $scope.populateReact = function () {
        $scope.isReact = true;
        $scope.clearItems();
        $scope.reactItems = createItems();
    };

    $scope.clearItems = function () {
        $scope.angularItems = [];
        $scope.reactItems = [];
        $scope.updateTime = "-";
        $scope.watchersCount = 0;
    };

    $scope.setUpdateTime = function (time) {
        $scope.updateTime = time;
    };

    $scope.showUpdateTime = function () {
        return $scope.angularItems.length > 0 || $scope.reactItems.length > 0;
    };

    $scope.setWatchersCount = function () {
        (function () {
            var root = angular.element(document.getElementsByTagName('body'));
            var watchers = [];

            var f = function (element) {
                if (element.data().hasOwnProperty('$scope')) {
                    angular.forEach(element.data().$scope.$$watchers, function (watcher) {
                        watchers.push(watcher);
                    });
                }

                angular.forEach(element.children(), function (childElement) {
                    f(angular.element(childElement));
                });
            };

            f(root);

            $scope.watchersCount = watchers.length;
        })();
    };

    $scope.onAngularShowSubItemClick = function (item) {
        item.prop6.show = !item.prop6.show;
        item.prop6.showHide = item.prop6.show ? "Hide" : "Show";
        measureTime();
        $scope.setWatchersCount();
    };

    $scope.onAngularUpdateSubItemClick = function (item) {
        item.prop6.counter++;
        measureTime();
        $scope.setWatchersCount();
    };

    $scope.onReactShowSubItemClick = function (reactComponent, item) {
        item.prop6.show = !item.prop6.show;
        item.prop6.showHide = item.prop6.show ? "Hide" : "Show";
        reactComponent.setState({ item: item, scope: $scope });
    };

    $scope.onReactUpdateSubItemClick = function (reactComponent, item) {
        item.prop6.counter++;
        reactComponent.setState({ item: item, scope: $scope });
    };
});