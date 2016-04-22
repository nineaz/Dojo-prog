array = [true,  true,  true,  false,
	 true,  true,  true,  true ,
	 true,  false, true,  false,
	 true,  false, false, true ,
	 true,  true,  true,  true ,
	 false, false, true,  true];


var nbMoutons = function() {
	var moutons = 0;
for(var i= 0; i < array.length; i++) {
	if (array[i] === true) {
		moutons++;
	
	}
}

		console.log(moutons);
}
nbMoutons();

