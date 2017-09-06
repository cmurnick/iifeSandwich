var sandwich = (function(oldSandwich){
	const bread = {"White": 0.50, "Wheat": 0.50, "Italian": 0.75, "Wrap instead": 1.00};
		oldSandwich.getBread = function() {
		return bread;
	};
	return oldSandwich;
})(sandwich || {});