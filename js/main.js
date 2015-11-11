(function(){

	var app = angular.module('greatestMusicians',['ngRoute']);

	app.controller('HeadCtrl',function($scope, Head){
		$scope.Head = Head;
	});

	function HomeHeadCtrl($scope, Head){
		Head.setTitle('Angular Rocks');
		Head.setDescription('Esto es la descripción por defecto');
		Head.setKeywords('angular, rocks, default');
	};

	function FooHeadCtrl ($scope, Head){
		Head.setTitle('Angular Rocks');
		Head.setDescription('Esto es la descripción por defecto');
		Head.setKeywords('angular, rocks, default');
	};

	function BarHeadCtrl ($scope, Head){
		Head.setTitle('Angular Rocks');
		Head.setDescription('Esto es la descripción por defecto');
		Head.setKeywords('angular, rocks, default');
	};

	function TherollingstoneHeadCtrl ($scope, Head){
		Head.setTitle('The Rolling Stone');
		Head.setDescription('The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en 1969, falleciendo al poco tiempo, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.');
		Head.setKeywords('olling, stone, 1962');
	};

	function ThebeatlesHeadCtrl ($scope, Head){
		Head.setTitle('The Beatles');
		Head.setDescription('The Beatles fue una banda de rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.1 2 3 4 5 6 Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.');
		Head.setKeywords('beatles, Harrison, 1962');
	};

	function QueenHeadCtrl ($scope, Head){
		Head.setTitle('Queen');
		Head.setDescription('Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Freddie Mercury, que murió en 1991 y John Deacon, que se retiró en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.4');
		Head.setKeywords('Queen, Freddie, Mercury');
	};

	app.factory('Head', function(){
	  var title = 'Angular Rocks';
	  var description = 'Esto es la descripción por defecto';
	  var keywords = 'angular, rocks, default';
	  return {
	    title: function() { return title; },
	    description: function() { return description; },
	    keywords: function() { return keywords; },
	    setTitle: function(newTitle) { title = newTitle; },
	    setDescription: function(newDescription) { description = newDescription; },
	    setKeywords: function(newKeywords) { keywords = newKeywords; }
	  };
	});


	app.config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider) {
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

})();