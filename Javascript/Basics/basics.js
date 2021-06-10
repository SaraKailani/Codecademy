//String Concatenation
console.log('Hello' + 'World'); //Output: HelloWorld
console.log('Hello' + ' ' + 'World'); //Output: Hello World

//String Interpolation - uses variables
let myName = 'Sara';
let myCity = 'Lisbon';
console.log(`My name is ${myName} and I live in ${myCity}.`); //Output: My name is Sara and I live is Lisbon.

//Methods - dot operator > method name > parentheses
console.log('hello'.toUpperCase()); //Output: HELLO
console.log('Hey'.startsWith('H')); //Output: True

//Conditional Statements : If Statement
if (true) {
    console.log('This message will print!'); 
  } //Output: This message will print! > Inside the curly braces is the "Code Block"

//Conditional Statements : If .. Else Statement
if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  } /*Output: But the code in this block will! > The ELSE code block executes when
    the IF statement's condition evaluates to FALSE*/

//Ternary Operator > Short-Hand Syntax for If .. Else Statements
let isNightTime = true;
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
//If the Condition evaluates to TRUE, the first expression executes; if FALSE, the second executes

/*Comparison Operators : Used to compare values in Conditional Statements
Less than (<) Greater than (>) Less or equal (<=) Greater or equal (>=) Equal (===) Not equal (!==)
> All comparison statements evaluate to either TRUE or FALSE*/
let hungerLevel = 7;
if (hungerLevel !== 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
} //Output: We can eat later!

/*Logical Operators : Used to bring more logic in Conditional Statements
And (&&) > Both Conditionals must be TRUE < Or (||) Only ONE Conditional must be TRUE <
Not (!) > Reverses the value of the Conditional <*/
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood !== 'sleepy' && tirednessLevel < 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
} //Output: not bed time yet

/*Truthy and Falsy > Evaluates if a Conditional is TRUE or FALSE
Falsy values > (0) > (empty strings "") > (null) and (undifined) > (NaN - Not a Number)*/

//Else If Statements > Used to add more conditions to If .. Else Statements
let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}  else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
  } else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
  } else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
  }
else {
  console.log('Invalid season.');
} //Output: It's sunny and warm because it's summer!

//The SWITCH keyword (or SWITCH Statement) > Alternative syntax to Else If Statements
let season = 'summer';
switch (season) {
  case 'spring':
    console.log("It's spring! The trees are budding!");
    break;
  case 'winter':
    console.log("It's winter! Everything is covered in snow.");
  case 'fall':
    console.log("It's fall! Leaves are falling!");
  case 'summer':
    console.log("It's sunny and warm because it's summer!")
  default:
    console.log("Invalid season");
    break;
}//Output: It's sunny and warm because it's summer!