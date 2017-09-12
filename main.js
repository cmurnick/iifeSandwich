
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



var inputs = document.getElementsByTagName("input");
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type == "checkbox") {
        inputs[i].checked = true; 

        // wrap above in teh below event listener
        // add blank string inside event listener
        // add blank array
        // run above if and under the true, add a 4 loop through above dom string
        // loop throgh the name and the value
        // after loop then push the value through to the empty array
        // ignore else stmt
        // outside of if stmt, run a for loop through the value array and add the values together for the total price

    }  
}



    document.getElementById("sandwiches").addEventListener("change", function(e) {
      console.log(e);
      console.log(myCheese[e.target.getAttribute("id")]);
      
      if(e.target.checked) {
        if(e.target.classList.contains("bread")) { 
          console.log(e.target);
            var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myBread[e.target.getAttribute("id")]}</p>`;
        }   else if (e.target.classList.contains("cheese")) { 
            var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myCheese[e.target.getAttribute("id")]}</p>`;
        }   else if (e.target.classList.contains("condiments")) { 
            var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myCondiments[e.target.getAttribute("id")]}</p>`;
        }   else if (e.target.classList.contains("meat")) { 
            var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myMeat[e.target.getAttribute("id")]}</p>`;
        }   else if (e.target.classList.contains("veggies")) { 
            var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myVeggies[e.target.getAttribute("id")]}</p>`;
        }   

// add classnames to the p tag and combine into one p tag rather than 2
      
      // } else {
      //   if(e.target.classList.contains("bread")) { 
      //     console.log(e.target);
      //       var foodNode = 
      //   }   else if (e.target.classList.contains("cheese")) { 
      //       var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myCheese[e.target.getAttribute("id")]}</p>`;
      //   }   else if (e.target.classList.contains("condiments")) { 
      //       var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myCondiments[e.target.getAttribute("id")]}</p>`;
      //   }   else if (e.target.classList.contains("meat")) { 
      //       var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myMeat[e.target.getAttribute("id")]}</p>`;
      //   }   else if (e.target.classList.contains("veggies")) { 
      //       var foodNode = `<p>${e.target.getAttribute("id")}</p> <p>${myVeggies[e.target.getAttribute("id")]}</p>`;
      //   }   

      }

        // console.log(foodNode);
        document.getElementById("finalSandwich").innerHTML += foodNode;      
  });


  


// //breakdown of for loop to run in conjunction with Event Listener
// const finalSandwichLoop = (input) => {
//   let price = Object.values(input);
//   let name = Object.keys(input);
//   let sandwichString = '';

//   for (let i = 0; i < name.length; i++) {
//     domString= '';
//     domString +=   `<div>${name[i]}</div><br>`
//     sandwichString += domString;
//     }

//       writeToDom2(sandwichString);
//     }
  
// function writeToDom2(strang) {
//     wholeSandwich.innerHTML += strang;
//     }

// finalSandwichLoop(sandwichString);


// breadChooser.addEventListener("change", function(event){
//   selectedTopping = event.target.value;
//   for (let key in myBread){
//     if(selectedTopping === key && event.target.checked) {
//       finalSandwichPrice = myBread[key];
//       console.log(finalSandwichPrice);




  
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
  




