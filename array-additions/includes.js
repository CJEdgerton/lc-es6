// Searching an array
	myArr = [2,4,6,8];
	
	// old way	
	myBool = (myArr.indexOf(8) > -1);
	// new way using includes method 
	myBool = (myArr.includes(8));

	console.log( myBool ); // returns true