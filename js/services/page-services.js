(function(){

	var app = angular.module('pagesServiceModule',[]);

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
})();