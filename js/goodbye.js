(function(window){
	var goodbyeMessage = {};

	goodbyeMessage.flettername = function(names){
       console.log("Goodbye " + names);
	}

	window.goodbyeMessage = goodbyeMessage;
})(window);