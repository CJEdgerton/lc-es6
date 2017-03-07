// pass a bool and view console
function myFoo(bool) {
	if( bool ) {
		var foo = 'bar';
		console.log(foo); // outputs 'bar'
	} else {
		console.log(foo); // outputs undefined
		console.log(myVar); // outputs uncaught reference error: myVar is not defined.
	}
}

function myBar(bool) {
	var foo;
	if( bool ) {
		foo = 'bar';
		console.log(foo); // outputs 'bar'
	} else {
		console.log(foo); // outputs undefined
		console.log(myVar); // outputs uncaught reference error: myVar is not defined.
	}
}

function myBaz(bool) {
	if( bool ) {
		let foo = 'bar'; // using 'let' does not hoist the declaration
		console.log(foo); // outputs 'bar'
	} else {
		console.log(foo); // outputs uncaught reference error: foo is not defined
		console.log(myVar); // outputs uncaught reference error: myVar is not defined.
	}
}