(function(window){
	var helloMessage = {};

	helloMessage.flettername = function(names){
		console.log("Hello " + names);
	}

	window.helloMessage = helloMessage;
})(window);