var sandwich = (function(oldSandwich){
	const meat = {"Turkey": 1.00, "Salami": 1.25, "Roast Beef": 1.50, "No meat": 0.00};
		oldSandwich.getMeat = function() {
				return meat;
		}
	return oldSandwich;
})(sandwich || {});