//Function Declaration > Binds a Function to a name, or identifier
function greetWorld() {
    console.log('Hello World!');
}
greetWorld(); //Function Call > Output: Hello World!

/*Parameters and Arguments > Params work as placeholders for info (arguments)
that will be passed to the Function when called*/
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '!');
  }
  sayThanks('Cole');
  //Output: Thank you for your purchase Cole!

//Defaul Parameters > allow Params to have a set value if no Argument is passed to the Function
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`);
  }
greeting(); //Output: Hello, Stranger!
greeting('Nick'); //Output: Hello, Nick!

//Return Statement > Used to pass back info from a Function Call
function monitorCount(rows, columns){
    return rows * columns;
  }
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors); //Output: Prints 20
//Helper Functions > Using the return value of a Function inside another Function
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost); //Output: Prints 4000

//Function Expressions : Anonymous Functions, stored in a Variable to refer to it
const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
  return true;
  } else {
    return false;
  }
}
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday')); //Output: Prints FALSE
//Arrow Functions : simpler syntax
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
/*Arrow Functions : Concise Body
> ZERO PARAMS > const functionName = () => {}
> ONE PARAMS > const functionName = paramOne => {}
> TWO or more PARAMS > const functionName = (paramOne, paramTwo) => {}*/
