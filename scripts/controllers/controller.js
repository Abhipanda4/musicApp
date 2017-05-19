angular.module("musicApp")
	.controller("musicController", ["$scope", "$http", "urlservice", function($scope, $http, urlservice){
		var artist = {};
		var artistURL = "";

		artist.fetchData = function(){
			artist.test = "inside";
			artistURL = urlservice.getArtistInfo(artist.name);
			$http.jsonp(artistURL).then(onSuccess, onFailure);
		};
		artist.songs = {};
		function onSuccess(response){
			artist.songs = response.data.results;
		}
		function onFailure(response){
		}
		$scope.artist = artist;
	}]);
