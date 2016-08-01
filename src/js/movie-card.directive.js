export default function MovieCard(){
    return {
        restrict: 'E',
        scope: {
            title: '=movie-title'
        },
        templateUrl: 'templates/movie-card.template.htm',
        controller: function($http, $scope){
            let vm = this;
        },
        link: function(scope, element, attrs){},
        controllerAs: 'vm'
    };
}

MovieCard.$inject = [];
