// Generators
function *range(start, end) {
	while( start <= end ) {
		yield start;
		start++;
	}
}

// Iterate manually
	let iteratorOne = range(1,5);

	console.log( iteratorOne.next() );
	console.log( iteratorOne.next() );
	console.log( iteratorOne.next() );
	console.log( iteratorOne.next() );
	console.log( iteratorOne.next() );
	// Finished
	console.log( iteratorOne.next() ); 

// Iterate using for...of loop
	let iteratorTwo = range(1,10);

	for( let i of iteratorTwo ) {
		console.log(i)
	}

// Iterate using spread operator
	console.log(
		[...range(1,30)]
	)
