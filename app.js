'use strict';

angular.module("Reactify", [
    "ngReact",
])
.controller("MainCtrl", function ($scope, $timeout) {
    $scope.items = [];
    $scope.showAngular = false;
    $scope.showReact = false;
    $scope.amount = 2000;
    $scope.updateTime = "-";
    $scope.watchersCount = 0;
    $scope.isReact = false;

    $scope.crateItems = function () {
        $scope.items = [];
        for (var i = 0; i < $scope.amount; i++) {
            $scope.items.push({
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
    }
    $scope.crateItems();

    function measureTime() {
        var startTimeList = new Date().getTime();
        $timeout(function () {
            var time = (new Date().getTime() - startTimeList) + " ms";
            $scope.setUpdateTime(time);
            console.log("ANGULAR - List updated in: " + time);
        });
    };

    $scope.populateAngular = function () {
        $scope.showAngular = true;
        $scope.showReact = false;
        measureTime();
    };

    $scope.populateReact = function () {
        $scope.showAngular = false;
        $scope.showReact = true;
    };

    $scope.clearItems = function () {
        $scope.showAngular = false;
        $scope.showReact = false;
        $scope.updateTime = "-";
        $scope.watchersCount = 0;
    };

    $scope.setUpdateTime = function (time) {
        $scope.updateTime = time;
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
    };

    $scope.onAngularUpdateSubItemClick = function (item) {
        item.prop6.counter++;
        measureTime();
    };

    $scope.onReactShowSubItemClick = function (reactComponent) {
        var item = reactComponent.props.item;
        item.prop6.show = !item.prop6.show;
        item.prop6.showHide = item.prop6.show ? "Hide" : "Show";
        reactComponent.setState({ item: item, scope: $scope });
    };

    $scope.onReactUpdateSubItemClick = function (reactComponent) {
        var item = reactComponent.props.item;
        item.prop6.counter++;
        reactComponent.setState({ item: item, scope: $scope });
    };
});