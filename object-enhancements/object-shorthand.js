// Object shorthand

function getPersonOld() {
	let name = 'Bob';
	let age = 25;

	// old way
	return {
		name: name,
		age: age
	}
}

function getPersonNew() {
	let name = 'Bob';
	let age = 25;

	// new way ( when property name = variable name )
	return { name, age };
}

console.log(getPersonNew());