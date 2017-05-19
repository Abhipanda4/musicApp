angular.module("musicApp")
	.factory("urlservice", function(){
		var service = {};
		service.getArtistInfo = function(artistName){
			var base_url = "https://itunes.apple.com/search?term=";
			var artistModified = artistName.split(' ').join('+');
			return base_url + artistModified; 
		};
		return service;
	});
