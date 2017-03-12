import TaskCollection from './TaskCollection';
import Person from './Person';

new TaskCollection([
	'Cut grass',
	'Blow off driveway',
	'Paint new deck wood',
	'Replace radiator in car',
	'Do dishes'
]).dump();

console.log( '***********' );

let bob = new Person('Bob', 'bob@bob.com');
console.log( bob.sayHi() );