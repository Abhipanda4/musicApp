angular.module("musicApp", ['ngMaterial']).config(function($sceProvider, $mdThemingProvider){
	$sceProvider.enabled(false);
	$mdThemingProvider.theme("dark-blue").backgroundPalette("blue").dark();
});
