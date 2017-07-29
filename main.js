// // console.log("Coins on coins")


//   // Input: 0.67
//   // Output:
//   // {
//   //   quarters: 2,
//   //   dimes: 1,
//   //   nickels: 1,
//   //   pennies: 2
//   // }

// // let numberOfQuarters = 0;
// // let numberOfDimes = 0;
// // let numberOfNickles = 0;
// // let numberOfPennies = 0;

// // function coinCounter (input) {
// //   // Initialize a JavaScript object to hold the coins
// //   var coinPurse = {
// //   	quarters: numberOfQuarters,
// //   	dimes: numberOfDimes,
// //   	nickles: numberOfNickles,
// //   	pennies: numberOfPennies
// //   };
  
// //   coinPurse.quarters = input/coinPurse.quarters;
// //   coinPurse.dimes = input/coinPurse.dimes;
// //   coinPurse.nickles = input/coinPurse.nickles;
// //   coinPurse.pennies = input/coinPurse.pennies;

// //   return coinPurse;
// // }

// // console.log(coinCounter(1.50));
// // var coins = coinCounter()
// // console.log(coins);

// // debugger;
// // function howManyQuarters(input){
// // 	let wholeInput = input * 100;
// // 	let quarter = 25;
// // 	while (wholeInput >= quarter) {
// // 		wholeInput -= quarter;
// // 		numberOfQuarters++;
// // 	} else howManyDimes();
	
// // 	return numberOfQuarters; 
// // };
// // function howManyDimes(input){
// // 	let wholeInput = input * 100;
// // 	let quarter = 25;
// // 	while (wholeInput >= quarter) {
// // 		wholeInput -= quarter;
// // 		numberOfDimes++;
// // 	} else howManyNickles();
	
// // 	return numberOfDimes; 
// // };


// // // hypothetical argument
// // console.log(howManyQuarters(1.50));

// // Subtract quarters until no longer possible

// // var enteredAmount = prompt("Enter a dollar amount of your choosing");
// //converting user input from a string to a number
// // enteredAmount = parseInt(enteredAmount);

// let numberOfQuarters = 0;
// let numberOfDimes = 0;
// let numberOfNickles = 0;
// let numberOfPennies = 0;

// //converting the entered amount from a potential decimal into a whole number
// // let wholeInput = enteredAmount * 100;
// let wholeInput = 2.58;
// wholeInput = wholeInput * 100;

// // debugger;
// function howManyQuarters(input){
//     let quarter = 25;
//     while (input >= quarter) {
//         input -= quarter;
//         numberOfQuarters++;
//     } 	
//     return ; 
// };
// console.log(howManyQuarters(1.21))

// // function howManyDimes(input){
// //     let dime = 10;
// //     while (input >= dime) {
// //         input -= dime;
// //         numberOfDimes++;
// //     } 	
// //     // return numberOfQuarters; 
// // };
// // function howManyNickles(input){
// //     let nickle = 5;
// //     while (input >= nickle) {
// //         input -= nickle;
// //         numberOfNickles++;
// //     } 	
// //     // return numberOfQuarters; 
// // };
// // function howManyPennies(input){
// //     let penny = 1;
// //     while (input >= penny) {
// //         input -= penny;
// //         numberOfPennies++;
// //     } 	
// //     // return numberOfQuarters; 
// // };
// // function countCoins(input) {
// //     howManyQuarters(input);
// //     howManyDimes(input);
// //     howManyNickles(input);
// //     howManyPennies(input);
// //     console.log("Quarters: " + numberOfQuarters);
// //     console.log("Dimes: " + numberOfDimes);
// //     console.log("Nickles: " + numberOfNickles);
// //     console.log("Pennies: " + numberOfPennies);
// // }
// // countCoins(wholeInput);

var enteredAmount = prompt("Enter a number");
// converting user input from a string to a number
enteredAmount = parseFloat(enteredAmount);

//----VARIABLES-----
let numberOfQuarters = 0;
let numberOfDimes = 0;
let numberOfNickels = 0;
let numberOfPennies = 0;
let quarter = 25;
let dime = 10;
let nickel = 5;
let penny = 1;

//converting the entered amount from a potential decimal into a whole number
let wholeInput = enteredAmount * 100;

//----DECLARED FUNCTIONS----
function coinGrabQuarters(input, coin){
// debugger;
    while (input >= coin) {
        input -= coin;
        if (coin === quarter) {
        numberOfQuarters++;
      }; 
    };   
    return input;
};
function coinGrabDimes(input, coin){
// debugger;
    while (input >= coin) {
        input -= coin;
        if (coin === dime) {
        numberOfDimes++;
      }; 
	};
	return input;
};
function coinGrabNickels(input, coin){
// debugger;
    while (input >= coin) {
        input -= coin;
        if (coin === nickel) {
        numberOfNickels++;
      };       
	};
	return input;
};
function coinGrabPennies(input, coin){
// debugger;
    while (input >= coin) {
        input -= coin;
        if (coin === penny) {
        numberOfPennies++;
      };      
	};
	return input;
};
function countCoins(input) {
    var remainderFromQuarters = coinGrabQuarters(input, quarter);
    var remainderFromDimes = coinGrabDimes(remainderFromQuarters, dime);
    var remainderFromNickels = coinGrabNickels(remainderFromDimes, nickel);
    var remainderFromPennies = coinGrabPennies(remainderFromNickels, penny);
    // console.log("Quarters: " + numberOfQuarters);
    // console.log("Dimes: " + numberOfDimes);
    // console.log("Nickels: " + numberOfNickels);
    // console.log("Pennies: " + numberOfPennies);
    var coinPurse = {
	  	quarters: numberOfQuarters,
	  	dimes: numberOfDimes,
	  	nickles: numberOfNickels,
	  	pennies: numberOfPennies
  };
  console.log(coinPurse)
};
countCoins(wholeInput);




