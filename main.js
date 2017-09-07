
let myBread = sandwich.getBread();

let myCheese = sandwich.getCheese();

let myCondiments = sandwich.getCondiments();

let myMeat = sandwich.getMeat();


let myVeggies = sandwich.getVeggies();


// SolarSystem.setPlanet("Pluto");
// let myPlanets = SolarSystem.getPlanets();
// console.log("My planets", myPlanets);

var createSandwich = document.getElementById('sandwiches');


const domStrings = (message, input) => {
    let price = Object.values(input);
    let name = Object.keys(input);
    console.log(name);
    let sandwichString = '';
   

  
  	var domString2 = `<h3> ${message}</h3>`;
    for (var i =0; i < name.length; i++) {
       let domString = '';
      
      // domString += `<div> + "Choose your" + "meat" + ":"</div>`
	  domString +=   `<input type="checkbox" name="${name[i]}" value="${price[i]}">${name[i]}</input><br>`
	  
	   sandwichString += domString;
    }

      writeToDom(domString2 + sandwichString);
    }
  

  function writeToDom(strang) {
    createSandwich.innerHTML += strang;
    }

  domStrings("poop", myBread);
  	
  domStrings("poop2", myCheese);

  domStrings(myCondiments);


