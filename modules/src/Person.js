class Person {
	constructor( name, email ) {
		this._name = name;
		this._email = email;
	}

	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

	sayHi() {
		return `Hi I'm ${this.name}.`;
	}
}

export default Person;