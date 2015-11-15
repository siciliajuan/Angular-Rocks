angular.module('greatestMusiciansModule').
config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider.
		when('/',{
			templateUrl: './templates/pages/home/index.html',
			controller: HomeHeadCtrl
		})
		.when('/foo',{
			templateUrl: './templates/pages/foo/index.html',
			controller: FooHeadCtrl
		})
		.when('/bar',{
			templateUrl: './templates/pages/bar/index.html',
			controller: BarHeadCtrl
		})
		.when('/the-rolling-stone',{
			templateUrl: './templates/pages/the-rolling-stone/index.html',
			controller: TherollingstoneHeadCtrl
		})
		.when('/the-beatles',{
			templateUrl: './templates/pages/the-beatles/index.html',
			controller: ThebeatlesHeadCtrl
		})
		.when('/queen',{
			templateUrl: './templates/pages/queen/index.html',
			controller: QueenHeadCtrl
		})
		.otherwise({
			redirectTo: '/'
		});
}]);