class User {
	constructor( username, email ) {
		this.username = username;
		this.email = email;
	}

	static register( username, email ) {
		return new User( username, email );
	}

	// Using rest
	static create( ...args ) {
		return new User( ...args );
	}
}

let user = User.register( 'Bob', 'bob@bob.com' );
let userTwo = User.create( 'Jane', 'jane@jane.com' );

console.dir( user );
console.dir( userTwo );
