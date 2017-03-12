let title = "Bob's Journey";
	
	// Searching string
		// Old way
		if( title.indexOf('Bob') >= 0 ) {
			console.log( 'Title includes Bob' );
		}

		// New includes method
		if(title.includes('Bob')) {
			console.log( 'Title includes Bob' );
		}

	// Starts with
		// Old way
		if( title.indexOf('Bob') == 0 ) {
			console.log( 'Title starts with Bob' );
		}

		// New startsWith method
		if( title.startsWith('Bob') ) {
			console.log( 'Title starts with Bob' );
		}
			// Can also offset
			if( title.startsWith( 'Journey', 6) ) {
				console.log('Offset by 6 is "Journey"');
			}

	// Ends with
		// Old way
		if( title.indexOf('Journey') == title.length - 'Journey'.length ) {
			console.log( 'Title ends with Journey' );
		}

		// New endsWith method
		if( title.endsWith('Journey') ) {
			console.log( 'Title ends with Journey' );
		}
			// Can also offset (go from length backwards)
			if( title.endsWith('J', 7) ) {
				console.log('Offset by 7 found "J"');
			}

/* ************************* */

// Repeat method
	// Example 1
		let str = 'tro';
		console.log( str + 'lol'.repeat(100) );

	// Example 2	
		let heading = 'This is a heading';
		let padding = '='.repeat(5);

		// Output '===== This is a heading ====='
		console.log( 
			`${padding} ${heading} ${padding}` 
		);