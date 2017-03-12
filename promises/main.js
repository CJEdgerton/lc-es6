var timer = function( length ) {
	return new Promise( function(resolve, reject) {
		console.log('Init Promise');
		setTimeout( function() {
			console.log('Timeout done.');
			resolve();
		}, length);
	});
}

timer(2000).then(function() {
	alert('Timer finished');
})