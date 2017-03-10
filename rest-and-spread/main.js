// *** Rest example ***
	// Take any number of arguments and creates an array called numbers
	function sumRest(...numbers) {
		console.log('numbers = ' + numbers); 
		return numbers.reduce( (prev,current) => prev + current );
	}
	// If you have other args, put them first
	function sumRestMultipleArgs(foo, ...numbers) {
		console.log('foo = ' + foo); 
		console.log('numbers = ' + numbers); 
		return numbers.reduce( (prev,current) => prev + current );
	}

	// call sum in console to demo...
	// sumRest(1,2,3); returns 6
	// sumRest(20,23,987,2894,12); returns 3936
	// sumRestMultipleArgs( 10,1,2,3 ); returns 6

// Spread example
	// Lets you split array into single args
	function sumSpread(x,y) {
		return x + y;
	}

	let nums = [1,2];
	let numz = [1,2,3];

	// Call inconsole to demo.
	// sumSpread(...nums); return 3
	// sumSpread(...numz); return 3 as well because sumSpread only takes two args
