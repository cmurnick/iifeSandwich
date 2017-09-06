var sandwich = (function(oldSandwich){
	const veggies = {"Lettuce": 0.10, "Tomato": 0.15, "Alfalfa Sprouts": 0.25, "No Veggies": 0.10};
		oldSandwich.getVeggies = function() {
				return veggies;
				
		}
	return oldSandwich;
})(sandwich || {});