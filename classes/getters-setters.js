class User {
	constructor( username, email ) {
		this._username = username;
		this._email = email;
	}

	get username() {
		return this._username + ' and some additional text'; 
	}

	set username(newUsername) {
		this._username = newUsername;
	}
}

let user = new User( 'Bob', 'bob@bob.com' );

console.dir( user );
console.log( user.username = 'Joe' );
console.log( user.username );
