class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	aboutReturnOld() {
		let names=['John', 'Jane', 'Jack', 'Jill'];
		names = names.map(function(name) {
			return name + ' is cool'; // need to use return
		});

		console.log(names);
	}

	aboutReturnNew() {
		let names=['John', 'Jane', 'Jack', 'Jill'];
		names = names.map( name => name + ' is cool' ); // much nicer

		console.log(names);
	}
}

class Task {}

new TaskCollection([
	new Task,
	new Task,
]).aboutReturnOld();

console.log( '________' );

new TaskCollection([
	new Task,
	new Task,
]).aboutReturnNew();