// Classes are first class citizens and can be used anywhere.

function log( strategy ) {
	strategy.handle();
}

log( new class {
	handle() {
		console.log('Using the console strategy to log');
	}
})
