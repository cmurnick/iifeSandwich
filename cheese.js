var sandwich = (function(oldSandwich){
	const cheese = {"Cheddar": 1.25, "Swiss": 1.75, "Pepperjack": 2.00, "No cheese": 0.00};
		oldSandwich.getCheese = function() {
				return cheese;
		};
	return oldSandwich;
})(sandwich || {});