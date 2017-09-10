
let myBread = sandwich.getBread();
let myCheese = sandwich.getCheese();
let myCondiments = sandwich.getCondiments();
let myMeat = sandwich.getMeat();
let myVeggies = sandwich.getVeggies();

var createSandwich = document.getElementById('sandwiches');


const domStrings = (message, input) => {
    let price = Object.values(input);
    let name = Object.keys(input);
    let sandwichString = '';
   
  	var domString2 = `<h3> ${message}</h3>`;
    
    for (var i =0; i < name.length; i++) {
       let domString = '';
      
	  domString +=   `<input type="checkbox" name="${name[i]}" value="${price[i]}">${name[i]}</input><br>`
    sandwichString += domString;
    }
      writeToDom(domString2 + sandwichString);
    }
  

function writeToDom(strang) {
    createSandwich.innerHTML += strang;
    }

  domStrings("Choose your bread:", myBread);
  domStrings("Choose your cheese:", myCheese);
  domStrings("Choose your condiments:", myCondiments);
  domStrings("Choose your meat:", myMeat);
  domStrings("Choose your veggies:", myVeggies);

//what I need to do overall for event listener
// target all items by class name of main div
// for loop through them
// event listener on change
// then if statement

var wholeSandwich = document.getElementById("finalSandwich");

//entire event listener, but feel like it needs to be broken to smaller parts.  NOT WORKING LIKE THIS
const sandwichOrder = (input) => {  
  let price = Object.values(input);
  let name = Object.keys(input);


    document.getElementById("sandwiches").addEventListener("change", function(e) {
      console.log(e);
      for (let i = 0; i < input.length; i++ ){

      if(event.target === event.target.checked) { 
          add.event.target.name
      } else {
          remove.event.target.name
      }
      console.log(sandwichOrder);
  }
})
}
  


//breakdown of for loop to run in conjunction with Event Listener
const finalSandwichLoop = (input) => {
  let price = Object.values(input);
  let name = Object.keys(input);
  let sandwichString = '';

  for (let i = 0; i < name.length; i++) {
    domString= '';
    domString +=   `<div>${name[i]}</div><br>`
    sandwichString += domString;
    }

      writeToDom2(sandwichString);
    }
  
function writeToDom2(strang) {
    wholeSandwich.innerHTML += strang;
    }

finalSandwichLoop(sandwichString);







  
//   var wholeSandwich = document.getElementById('finalSandwich');

 
// TRIED THIS TO NEST A FUNCTION IN A FUNCTION TO GET EVERYTHING TO WORK AT ONCE - AGAIN DOESN'T WORK

//   const domStringWhole = (input) => {
//     let price = Object.values(input);
//     let name = Object.keys(input);
//     console.log(name);
//     let sammyString = '';

//   for (var i =0; i < name.length; i++) {
//       for (var j = 0; j < price.length; j++) {
//         let domString3= '';

//       domString3 += `<div> ${name[i]} + ${price[j]} </div>`

//       domString3 += sammyString;
//       sammyString += domString3;
//        }
//       }
//       writeToDom2(sammyString);
//       }
            

// 
    

//   domStringWhole();
  




