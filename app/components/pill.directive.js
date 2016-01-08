(function() {
    angular.module('app')
    .directive('pill', pill);

    function pill() {
        return {
            scope: {
                id: "&id",
                type: "&type"
            }
            template: "<span></span>",
            link: function(scope, el, attr) {
                el.innerText = scope.type.split()[0].toUpperCase() + '-' + scope.id; 
            }
        }
    }
})();
