/* Learn JavaScript: Full Course for Beginners. JavaScript Tutorial for Beginners: Learn JavaScript in 3:26:42 Hours. 
 We will cover variables, arrays, objects, functions, loops, if else, switch, break, continue, operators, 
 and some of the built -in functions in JavaScript. */

const express = require("express"); // import express

const app = express(); // create an express app
const port = 3000; // define the port to run the server

// app.get("/", (req, res) => {
//   res.send("Welcome to my server");
// });

// console.log("It is well with my soul");

// const Day = "Saturday";

// switch (Day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "Thursday":
//     console.log("Today is Thursday");
//     break;
//   case "Friday":
//     console.log("Today is Friday");
//     break;
//   case "Saturday":
//     console.log("Today is Saturday");
//     break;
//   case "Sunday":
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("This is not a day of the week");
//     break;
// }

// var ourName = "Samopz";
// var ourStr = "Hello, my name is " + ourName + ", how are you?";
// console.log(ourStr);

// var ourName = "Samopz";
// var ourStr = `Hello, my name is ${ourName}, how are you?`;
// console.log(ourStr);

// lastName = "Doe";
// var lastNameLength = lastName[1];
// var lastLetterOfLastName = lastName[lastName.length - 1];
// console.log(lastLetterOfLastName);
// console.log(lastNameLength);

// Word Blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//   var result = "";
//   result +=
//     "The " +
//     myAdjective +
//     " " +
//     myNoun +
//     " " +
//     myVerb +
//     " to the store " +
//     myAdverb;
//   return result;
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));
// console.log(wordBlanks("car", "fast", "drove", "fast"));

// Store Multiple Values in one Variable using JavaScript Arrays
// var ourArray = ["John", 23];
// var myArray = ["Quincy", 1];

// // Nested Arrays
// var ourArray = [
//   ["the universe", 42],
//   ["everything", 101010],
// ];
// var myArray = [
//   ["Bulls", 23],
//   ["White Sox", 45],
// ];
// console.log(ourArray);
// console.log(myArray);

// // Access Array Data with Indexes
// var ourArray = [50, 60, 70];
// var ourData = ourArray[0];
// console.log(ourData);

// var myArray = [50, 60, 70];
// var myData = myArray[0];
// console.log(myData);

// // Modify Array Data With Indexes
// // Example
// var ourArray = [18, 64, 99];
// ourArray[1] = 45;

// Setup
// var myArray = [18, 64, 99];

// // Only change code below this line.
// myArray[0] = 45;
// console.log(myArray);

// // Access Multi-Dimensional Arrays With Indexes
// var myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];

// var myData = myArray[3][0];
// console.log(myData);

// // Manipulate Arrays With push()
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
// var myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];

// // Only change code below this line.
// myArray.push(["dog", 3]);

// console.log(myArray);

// // Manipulate Arrays With pop()
// var ourArray = [1, 2, 3];
// var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1, 2]

// Setup
// var myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];

// // Only change code below this line.
// var removedFromMyArray = myArray.pop();
// console.log(myArray);

// // Manipulate Arrays With shift()
// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
// var myArray = [
//   ["John", 23],
//   ["dog", 3],
// ];

// // Only change code below this line.
// var removedFromMyArray = myArray.shift();
// console.log(myArray);

// // Manipulate Arrays With unshift()
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift(); // ourArray now equals ["J", "cat"]
// ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
// var myArray = [
//   ["John", 23],
//   ["dog", 3],
// ];
// myArray.shift();

// // Only change code below this line.
// myArray.unshift(["Paul", 35]);
// console.log(myArray);

// // Shopping List
// var myList = [
//   ["cereal", 3],
//   ["milk", 2],
//   ["bananas", 3],
//   ["juice", 2],
//   ["eggs", 12],
// ];

// console.log(myList);

// Write Reusable JavaScript with Functions
// function ourReusableFunction() {
//   console.log("Heyya, World");
// }

// ourReusableFunction();

// Another Example
// function reusableFunction() {
//   console.log("Hi World");
// }

// reusableFunction();

// Passing Values to Functions with Arguments
// function ourFunctionWithArgs(a, b) {
//   console.log(a - b);
// }

// ourFunctionWithArgs(10, 5); // Outputs 5

// Another Example
// function functionWithArgs(a, b) {
//   console.log(a + b);
// }

// functionWithArgs(10, 5); // Outputs 15

// Global Scope and Functions
// var myGlobal = 10;

// function fun1() {
//    oopsGlobal = 5;
// }

// // Only change code below this line
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal + ',';
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// fun1();
// fun2();

// Local Scope and Functions
// function myLocalScope() {
//   var myVar = 5;
//   console.log(myVar);
// }

// myLocalScope();

// Global vs. Local Scope in Functions
// var someVar = "Hat";

// function myFun() {
//   var someVar = "Head";
//   return someVar;
// }

// console.log(myFun());
// console.log(someVar);

// // Return a Value from a Function with Return
// function minusSeven(num) {
//   return num - 7;
// }

// console.log(minusSeven(10));

// function timesFive(num) {
//   return num * 5;
// }

// console.log(timesFive(5));

// Understanding Undefined Value returned from a Function
// var sum = 0; // sum is global variable here because it is defined b4 or outside the function
// function addThree() {
//   sum = sum + 3;
// }

// function addFive() {
//   sum += 5;
// }

// addThree();
// addFive();

// Assignment with a Returned Value
// var changed = 0; // global variable

// function change(num) {
//   return (num + 5) / 3;
// }

// changed = change(10);

// var processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// processed = processArg(7);

// console.log(changed);
// console.log(processed);

// Stand in Line
// function nextInLine(arr, item) {
//   arr.push(item);
//   return arr.shift();
// }

// var testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// console.log("After: " + JSON.stringify(testArr));

// Understanding Boolean Values
// function welcomeToBooleans() {
//   return true;
// }

// console.log(welcomeToBooleans());

// Use Conditional Logic with If Statements
// function ourTrueOrFalse(isItTrue) {
//   if (isItTrue) {
//     return "Yes, it's true";
//   }
//   return "No, it's false";
// }

// console.log(ourTrueOrFalse(true));

// function trueOrFalse(wasThatTrue) {
//   if (wasThatTrue) {
//     return "Yes, that was true";
//   }
//   return "No, that was false";
// }

// console.log(trueOrFalse(true));

// Comparison with the Equality Operator
// function testEqual(val) {
//   if (val == 12) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(testEqual(10));

// Comparison with the Strict Equality Operator
// function testStrict(val) {
//   if (val === 7) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(testStrict(10));

// Practice comparing different values
// function compareEquality(a, b) {
//   if (a === b) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(compareEquality(10, '10'));

// Comparison with the Inequality Opertaor
// function testNotEqual(val) {
//   if (val != 99) {
//     return "Not Equal"
//   }
//   return "Equal"
// }

// console.log(testNotEqual(10))

// Comparison with the Strict Inequality Opertaor
// function testStrictEqual(val) {
//   if (val !== 17) {
//     return "Not Equal"
//   }
//   return "Equal"
// }

// console.log(testStrictEqual(10))

// Comparison with the Logical And Operator
// function testGreaterThan(val) {
//   if (val > 100) {
//     return "Over 100"
//   }
//   if (val > 10) {
//     return "Over 10"
//   }
//   return "10 or Under"
// }

// console.log(testGreaterThan(10))

// Comparison with the Greater Than Or Equal To Operator
//  function testGreaterOrEqual(val) {
//   if (val >= 20) {
//     return "20 or Over"
//   }
//   if (val >= 10) {
//     return "10 or Over"
//   }
//   return "Less than 10"
// }

// console.log(testGreaterOrEqual(20))

//Comparison with the Less Than Operator
// function testLessThan(val) {
//   if (val < 25) {
//     return "Under 25"
//   }
//   if (val < 55) {
//     return "Under 55"
//   }
//   return "55 or Over"
// }

// console.log(testLessThan(10))

// Comparison with the Less Than Or Equal To Operator
//  function testLessOrEqual(val) {
//   if (val <= 20) {
//     return "Smaller Than or Equal to 12"
//   }
//   if (val <= 10) {
//     return "Smaller Than or Equal to 24";
//   }
//   return "More than 24"
// }

// console.log(testLessOrEqual(10))

// Comparisons with the Logical And Operator
// function testLogicalAnd(val) {
//   if (val <= 50 && val >= 25) {
//       return "yes";
//     }

//   return "No";
// }

// console.log(testLogicalAnd(10));

// Comparisons with the Logical Or Operator
// function testLogicalOr(val) {
//   if (val < 10 || val > 20) {
//     return "Outside"
//   }
//   return "Inside"
// }

// console.log(testLogicalOr(10))

// Else Statements
// function testElse(val) {
//   var result = "";

//   if (val > 5) {
//     result = "Bigger than 5";
//   } else {
//     result = "5 or Smaller";
//   }
//   return result;
// }

// console.log(testElse(4));

// Else If Statements
// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10"
//   } else if (val < 5) {
//     return "Smaller than 5"
//   } else {
//     return "Between 5 and 10"
//   }
// }

// console.log(testElseIf(7))

// Logical Order in If Else Statements
// function orderMyLogic(val) {
//   if (val < 10) {
//     return "Less than 10"
//   } else if (val < 5) {
//     return "Less than 5"
//   } else {
//     return "Greater than or equal to 10"
//   }
// }

// console.log(orderMyLogic(7))

app.listen(port, () => {
  console.log(`Server is running on port ${port}: Express.js`);
});
