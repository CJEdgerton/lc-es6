let items = new Set(['one', 'two', 'three']);

let itemsWithDuplicates = new Set([
	'one', 
	'two', 
	'three', 
	'one', 
	'two'
]);

console.log(items);
console.log(itemsWithDuplicates); // In sets duplicates are ignored.

// Set methods

	items.add('four');
	items.add('five');

	console.log(items);

	items.delete('five');

	console.log( 'items size now = ' + items.size );

	console.log( items.has('four') );
	console.log( items.has('five') );

	items.forEach( item => console.log(item) );

	items.clear();

	console.log( items );

// Can also new up instance
let newSet = new Set();
newSet.add('something');
console.log( newSet.values() );

