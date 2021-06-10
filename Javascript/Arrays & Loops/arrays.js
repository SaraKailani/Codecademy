/* Arrays are JS way to create lists. They can store any data type (strings, numbers, booleans).
Arrays are ordered, meaning each item as a numbered position.

> An ARRAY LITERAL creates an array by wrapping items in square brackets []*/
const hobbies = ['Biking', 'Swimming', 'Reading'];
console.log(hobbies); //Output: ['Biking', 'Swimming', 'Reading']

/*Acessing ARRAYS > Arrays are ZERO-INDEXED, meaning the positions start counting
from zero (0)*/
//From the CONST above
console.log(hobbies[1]); //Output: 'Swimming'
/*Update Elements > CONST var cannot be reassigned, however elements inside an array declared in
a CONST var are still mutable*/
hobbies[1] = 'Jogging';
console.log(hobbies); //Output: ['Biking', 'Jogging', 'Reading']

//Array Methods > called on arrays to make common tasks, like adding and removing elements
// The .push() Method > allows to add items to the END of an ARRAY
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('clean room', 'take dog out');
console.log(chores); //Output: ADDS both chores to the end of the ARRAY
// The .pop() Method > removes the LAST item of an ARRAY
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores); //Output: REMOVES 'mop floor' from the ARRAY

/*ARRAYS and FUNCTIONS > PASS-BY-REFERENCE - when an array is passed into a function, if the array is
mutated inside the function, that change will be maintained outside the function*/
const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept); //Output: ['arrays', 'can', 'be', 'MUTATED']
function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept); //Output: ['arrays', 'can', 'be']

//Nested Arrays > syntax
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2