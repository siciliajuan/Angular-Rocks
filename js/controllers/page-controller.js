angular.module('greatestMusiciansModule').
controller('HeadCtrl',function($location, $scope, Head){
	$scope.Head = Head;
});

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