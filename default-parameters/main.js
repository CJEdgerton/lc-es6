// Old way to apply default woould be this...
function applyDiscountOld( price, discount ) {

	// Set default here.
	discount = discount || .10;

	discountedPrice = price - ( price * discount );

	return discountedPrice;
}

// We can now set defaults in arguments
function applyDiscountNew( price, discount = .10 ) {

	discountedPrice = price - ( price * discount );

	return discountedPrice;
}

// Use helper to get discount percentage
function applyDiscountUsingHelper( price, discount = defaultDiscountRate() ) {

	discountedPrice = price - ( price * discount );

	return discountedPrice;
}

function defaultDiscountRate() {
	return .10;
}