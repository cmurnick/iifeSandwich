var sandwich = (function(oldSandwich){
	const condiments = {"Honey Mustard": 0.25, "Mayo": 0.35, "Ranch": 0.45, "No sauce": 0.00};
		oldSandwich.getCondiments = function() {
				return condiments;
		};
	return oldSandwich;
})(sandwich || {});