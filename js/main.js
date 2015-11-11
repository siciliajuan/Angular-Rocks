(function(){

	var pagesContent = [
		{
			title: 'Angular Rocks',
			description: 'Esto es la descripción por defecto',
			keywords: 'angular, rocks, default',
			image: '',
			info: '',
			video: ''
		},
		{
			title: 'The Rolling Stone',
			description: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en 1969, falleciendo al poco tiempo, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.',
			keywords: 'Rolling, stone, 1962',
			image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Stones_members_montage.JPG',
			info: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 1962 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.',
			video: 'https://www.youtube.com/embed/SGyOaCXr8Lw'
		},
		{
			title: 'The Beatles',
			description: 'The Beatles fue una banda de rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.1 2 3 4 5 6 Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.',
			keywords: 'beatles, Harrison, 1962',
			image: 'https://c2.staticflickr.com/2/1134/3170352349_90d78e5f00.jpg',
			info: 'The Beatles fue una banda de rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.',
			video: 'https://www.youtube.com/embed/ajCYQL8ouqw'
		},
		{
			title: 'Queen',
			description: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Freddie Mercury, que murió en 1991 y John Deacon, que se retiró en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.4',
			keywords: 'Queen, Freddie, Mercury',
			image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Queen_1976.JPG',
			info: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon.',
			video: 'https://www.youtube.com/embed/mLRjFWDGs1g'
		}
	];

	var app = angular.module('greatestMusicians',['ngRoute']);

	app.controller('HeadCtrl',function($location, $scope, Head){
		$scope.Head = Head;
	});
	//$location.absUrl()
	function HomeHeadCtrl($location, $scope, Head){
		updatePageData($location, Head,pagesContent[0]);
	};

	function FooHeadCtrl ($location, $scope, Head){
		updatePageData($location, Head,pagesContent[0]);
	};

	function BarHeadCtrl ($location, $scope, Head){
		updatePageData($location, Head,pagesContent[0]);
	};

	function TherollingstoneHeadCtrl ($location, $scope, Head){
		updatePageData($location, Head,pagesContent[1]);
	};

	function ThebeatlesHeadCtrl ($location, $scope, Head){
		updatePageData($location, Head,pagesContent[2]);
	};

	function QueenHeadCtrl ($location, $scope, Head){
		updatePageData($location, Head,pagesContent[3]);
	};

	function updatePageData($location, Head,pageContent){
		Head.setTitle(pageContent.title);
		Head.setDescription(pageContent.description);
		Head.setKeywords(pageContent.keywords);
		Head.setInfo(pageContent.info);
		Head.setimage(pageContent.image);
		Head.setVideo(pageContent.video);
		Head.setUrl($location.absUrl());
	};

	app.factory('Head', function(){
	  var title = 'Angular Rocks';
	  var description = 'Esto es la descripción por defecto';
	  var keywords = 'angular, rocks, default';
	  var info = '';
	  var image = '';
	  var video = '';
	  var url ='';
	  return {
	    title: function() { return title; },
	    description: function() { return description; },
	    keywords: function() { return keywords; },
	    info: function() { return info; },
	    image: function() { return image; },
	    video: function() { return video; },
	    url: function() { return url; },
	    setTitle: function(newTitle) { title = newTitle; },
	    setDescription: function(newDescription) { description = newDescription; },
	    setKeywords: function(newKeywords) { keywords = newKeywords; },
	    setInfo: function(newInfo) { info = newInfo; },
	    setimage: function(newimage) { image = newimage; },
	    setVideo: function(newVideo) { video = newVideo; },
	    setUrl: function(newUrl) { url = newUrl; }
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