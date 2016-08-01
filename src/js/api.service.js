export default function request($http){
    this.getMovies = get;

    function get(){
        $http.get('http://www.omdbapi.com/', { params: { s: 'kickass' }}).then(resp => {
            console.log(resp);
        });
    }
}
request.$inject = ['$http'];
