// Generators

function *numbers() {
	console.log('begin');

	yield 1;
	yield 2;
	yield 3;

}

// iterator = numbers();
// console.log( iterator.next() );

function *range(start, end) {
	yield start;
}

let iterator = range(1,5);
console.log( iterator.next() );