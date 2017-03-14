let tags = ['php', 'javascript', 'vue', 'javascript'];

let tagsSet = new Set(tags);

console.log( tagsSet );

// Find only those that are 3 letters
	// Use spread operator to turn into an array
	let filteredTags = new Set(
		[...tagsSet].filter( tag => tag.length === 3)
	);

	console.log( filteredTags );

// Line 9-11 expanded for newbs
	tagsArray = [...tagsSet];

	let filteredTagsArray = tagsArray.filter( function(tag) {
		return tag.length === 3;
	});

	let filteredTagsSet = new Set(filteredTagsArray);

	console.log( filteredTagsSet );
