// Creating Variables : pre-ES6
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood); // Prints pizza
console.log(numOfSlices); // Prints 8

// Creating Variables : let - these variables can be reassigned
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
// It's possible to declare a var without a value, in such case the var is set to 'undifined'

// Creating Variables : const - these variables cannot be reassigned, nor declared without a value
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

// Mathematical Assignment Operators - performing math operations using the number to the right
let levelUp = 10;
levelUp += 5;
console.log(levelUp); // Output: 15

// Increment and Decrement Operators - will increase or decrease the value of the variable by 1
let gainedDollar = 3;
gainedDollar++;
let lostDollar = 50;
lostDollar--;

// typeof Operator - to check the data type of a variable
let newVariable = 'typeof';
console.log(typeof newVariable); // Output: string
newVariable = 1;
console.log(typeof newVariable); // Output: number