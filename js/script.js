(function(){
    var names = ["Yaakov", "John", "Joe", "Natasha", "James", "David", "Stones","Jim","Alvarez"];

    for(var i = 0; i < names.length; i++){
	    var flname = names[i].charAt(0).toUpperCase();
	    if(flname == 'J'){
	    	goodbyeMessage.flettername (names[i]);           
	    }

	    else{
            helloMessage.flettername (names[i]);
	    }
}

})();
