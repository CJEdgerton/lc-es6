// Simple example
function exampleOne() {

	let person = {
		name: 'Bob',
		age: 30
	};

	let { name, age } = person;

	console.log(name) // Bob
	console.log(age) // 30	
}

// Real world example
function exampleTwo() {
	// Some ajax data
	let data = {
		name: 'Bob',
		age: 30,
		results: [ 'foo', 'bar' ],
		count: 1430
	}

	// old way
	// let results = data.results;
	// let count = data.count;

	// new way
	let { results, count } = data;

	console.log( results );
}

// As function argument
	function greet({ name, age }) {
		console.log(`Hello ${name}, you are ${age}.`);
	}

	// Before you might have done...
	function greet( person ) {
		console.log( `Hello ${person.name}, you are ${person.age}`);
	}

	greet({
		name: 'Luke',
		age: 24
	});
