// Generators

function *numbers() {
	console.log('begin');

	yield 1;
	yield 2;
	yield 3;

}
iterator = numbers();
console.log( iterator.next() );
console.log( iterator.next() );
console.log( iterator.next() );
console.log( iterator.next() );