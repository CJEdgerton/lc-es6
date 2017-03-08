class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	log() {
		// old way
		this.tasks.forEach(function(task) {
			console.log(task);
		});
	}

	logWithArrow() {
		// new way
		this.tasks.forEach( task => {
			console.log(task)
		});
	}

	logWithArrowCondensed() {
		// Only one line of logic within function so inline is ok without braces...
		this.tasks.forEach( task => console.log(task) );
	}

	logWithArrowMultipleArgs() {
		// With multiple args, add parens
		this.tasks.forEach( (task, index) => console.log(task, index) );
	}

	logWithArrowNoArgs() {
		// With no args, add empty parens
		this.tasks.forEach( () => console.log('Yo mamma so fat.') );
	}
}

class Task {}

new TaskCollection([
	new Task,
	new Task,
	new Task
]).log();
console.log( '________' );

new TaskCollection([
	new Task,
	new Task,
	new Task
]).logWithArrow();
console.log( '________' );

new TaskCollection([
	new Task,
	new Task,
	new Task
]).logWithArrowCondensed();
console.log( '________' );

new TaskCollection([
	new Task,
	new Task,
	new Task
]).logWithArrowMultipleArgs();
console.log( '________' );

new TaskCollection([
	new Task,
]).logWithArrowNoArgs();
console.log( '________' );