angular.module('myApp', [])
    .controller('myCtrl', function($scope, myService) {
        $scope.newItem = {};
        $scope.testString = 'I am test string';
        $scope.items = myService.getAllItems();
        $scope.removeItem = function(index) {
            $scope.items = myService.removeItem(index);
        };
        $scope.addItem = function(item) {
            if (!item.name || !item.phone) {
                return;
            }
            $scope.items = myService.addItem(item);
            $scope.newItem = {};
        };
    })
    .service('myService', function() {
        var items = [
            {name:'John', phone:'555-1276'},
            {name:'Mary', phone:'800-BIG-MARY'},
            {name:'Mike', phone:'555-4321'},
            {name:'Adam', phone:'555-5678'},
            {name:'Julie', phone:'555-8765'},
            {name:'Juliette', phone:'555-5678'}
        ];
        return {
            getAllItems: function() {
                return items;
            },
            removeItem: function(index) {
                return items = items.filter(function(el, ind) {
                    return index !== ind;
                });
            },
            addItem: function(item) {
                items.push(item);
                return items;
            }
        };
    })
    .directive('myDirective', function() {
        return {
            restrict: 'E',
            scope: {
                title: '='
            },
            template: '<h2>{{title}}</h2>',
            link: function(scope, element, attrs) {
                console.log(scope, element, attrs);
                scope.title += '!!!';
            }
        };
    });
