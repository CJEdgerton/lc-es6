class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	// Changes in 'this'
	oldThis() {
		this.tasks.forEach(function(task) {
			console.log(this); // undefined
		});
	}
	newThis() {
		this.tasks.forEach( task => {
			console.log(this); // this references the current TaskCollection object
		});
	}
}

class Task {}

new TaskCollection([
	new Task,
	new Task,
]).oldThis(); // undefined

console.log( '________' );

new TaskCollection([
	new Task,
	new Task,
]).newThis();