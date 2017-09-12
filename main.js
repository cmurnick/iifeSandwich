
let myBread = sandwich.getBread();
let myCheese = sandwich.getCheese();
let myCondiments = sandwich.getCondiments();
let myMeat = sandwich.getMeat();
let myVeggies = sandwich.getVeggies();

var createSandwich = document.getElementById('sandwiches');


const domStrings = (message, input, clazz) => {
    let price = Object.values(input);
    let name = Object.keys(input);
    let sandwichString = '';
   
  	var domString2 = `<h3> ${message}</h3>`;
    
    for (var i =0; i < name.length; i++) {
       let domString = '';
      
	  domString +=   `<input type="checkbox" id="${name[i]}" class="${clazz}" value="${price[i]}">${name[i]}</input><br>`
    sandwichString += domString;
    }
      writeToDom(domString2 + sandwichString);
    }
  

function writeToDom(strang) {
    createSandwich.innerHTML += strang;
    }

  domStrings("Choose your bread:", myBread, "bread");
  domStrings("Choose your cheese:", myCheese, "cheese");
  domStrings("Choose your condiments:", myCondiments, "condiments");
  domStrings("Choose your meat:", myMeat, "meat");
  domStrings("Choose your veggies:", myVeggies, "veggies");


document.getElementById("sandwiches").addEventListener("change", function(e) {
var inputs = document.getElementsByTagName("input");
var priceArray = 0;
var chosenToppings = '';''
document.getElementById("finalSandwich").innerHTML = '';
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type == "checkbox" && inputs[i].checked) {
        
        chosenToppings += `<div>`
        chosenToppings += `<span> ${inputs[i].id} ${inputs[i].value} </span>`
        chosenToppings += `</div>`

        document.getElementById("finalSandwich").innerHTML = chosenToppings;

        priceArray += parseFloat(inputs[i].value);


        }

}
        document.getElementById("finalSandwich").innerHTML += priceArray;
    }) ;


