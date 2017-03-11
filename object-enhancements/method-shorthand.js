// Object shorthand

function getPersonOld() {
	let name = 'Bob';
	let age = 25;

	// old way
	return {
		name: name,
		age: age,
		greet: function() {
			return 'Hello ' + this.name;
		}
	}
}

function getPersonNew() {
	let name = 'Bob';
	let age = 25;

	// new way ( when property name = variable name )
	return { 
		name, 
		age,
		greet() { return `Hello ${this.name}`; }
	};
}

console.log( getPersonNew().greet() );