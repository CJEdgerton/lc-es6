// Array findIndex
	myArr = [2,4,6,8,11];

	// Return the index of first value that meets condition.
	myTest = myArr.findIndex( item => {
		let testOne   = item === 8;
		let testTwo   = item < 8;
		let testThree = item % 2 > 0;

		// Try returning the different tests
		return testThree;

	});

	console.log('The index of the value in myArr is ' + myTest);