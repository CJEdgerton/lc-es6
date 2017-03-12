// Array find
	myArr = [2,4,6,8,11];

	// Return the first value in array that meets condition.
	myTest = myArr.find( item => {
		let testOne   = item === 8;
		let testTwo   = item < 8;
		let testThree = item % 2 > 0;

		// Try returning the different tests
		return testThree;

	});

	console.log('The value found in myArr is ' + myTest);

// Example
class User {
	constructor( name, isAdmin ) {
		this.name = name;
		this.isAdmin = isAdmin;
	}
}

let users = [
	new User( 'Jane', false ),
	new User( 'Bob', true ),
	new User( 'John', true )
];

let firstAdmin = users.find( user => user.isAdmin );

console.log('This the the first User object that is an admin ...');
console.dir(firstAdmin);
