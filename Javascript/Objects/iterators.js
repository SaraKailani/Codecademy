/*
The built-in JavaScript array methods that help us iterate are called ITERATION METHODS,
at times referred to as ITERATORS. They are methods called on arrays to
manipulate elements and return values.
*/

/* The .forEach() Method > will execute the same code for each element of an array but
not change the Array, and returns UNDEFINED*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}.`);
}); //Output: Prints the string + each fruit in the array

// The .map() Method > takes an argument of callback func and returns new array
const numbers = [1, 2, 3, 4, 5]; 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

// The .filter() Method > returns new array after filtering out from the original array
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
const shortWords = words.filter(word => {
  return word.length < 5;
});
console.log(shortWords); // Output: ['pen', 'door']

// The .findIndex() Method > returns the INDEX of the first element that evaluates to TRUE
const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); // Output: 3 - this is the INDEX of the first element that evaluates to TRUE
console.log(jumbledNums[3]); // Output: 5 < the element with the INDEX of [3] from the array

// The .reduce() Method > returns a single value after iterating through the elements of an array
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator); // Value of the first element
  console.log('The value of currentValue: ', currentValue); // Valus of the second element
  return accumulator + currentValue
}, 10); // 10 is the second argument for .reduce() and will add 10 to (accumulator)
console.log(newSum); // Output: 26