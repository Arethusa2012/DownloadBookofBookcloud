// script.js

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', []);

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
	$scope.bookname = "";
	$scope.getUrl = function(name) {
		var url = "http://oh37stobv.bkt.clouddn.com/";
		var convertText = encodeURIComponent(name);
		console.log(convertText);
		$scope.curBookURL = url + convertText;
		return $scope.curBookURL;
	}

	$scope.downloadBook = function(fileName, content){
		var fileName = $scope.bookname;
		var content = $scope.curBookURL;
		var aLink = document.createElement('a');
		var blob = new Blob([content]);
		var evt = document.createEvent("HTMLEvents");
	    evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
	    aLink.download = fileName;
	    aLink.href = content;
	    // aLink.href = URL.createObjectURL(blob);
	    aLink.dispatchEvent(evt);
	}
});