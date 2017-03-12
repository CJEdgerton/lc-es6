/* 	
	**************
	Old way of using 'classes'
	************** 	
*/	
	function User( username, email ) {
		this.username = username;
		this.email = email;

		// this will be redeclared on every call of User. not the good way
			this.changeEmailOne = function(email) {
				this.email = email;
			}
	}

	// Using prototype the method is shared instead of redeclared on every call of User
	User.prototype.changeEmailTwo = function(email) {
		this.email = email;
	}

	var user = new User('Bob', 'bob@bob.com');
	user.changeEmailTwo('bob@bobz.com');

	console.dir(user);

/* 	
	**************
	New way of working with classes
	************** 	
*/	

	class Person {
		constructor( name, email ) {
			this.name = name;
			this.email = email;
		}

		changeEmail(newEmail) {
			this.email = newEmail;
		}
	}

	let person = new Person('Bob', 'bob@bob.com');
	person.changeEmail('bob@bobz.com');
	console.dir( person );