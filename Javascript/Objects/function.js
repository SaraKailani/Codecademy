// Using objects as Parameters in functions, and assign or reassign properties

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// changing property (key) value and assigning new property
let greenEnergy = wtf => {
  wtf['Fuel Type'] = 'avocado oil';
};
let remotelyDisable = wtf => {
  wtf.disabled = true;
};

//function call
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship); // Prints: 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true

// Factory functions can be reused to create multiple objects
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
};
const tinCan = robotFactory('P-500', true);
console.log(tinCan.beep()); // Prints 'Beep Boop'
/*
Property value shorthand > no need to assign value properties when they're the same
as the key (model, mobile)
*/

/*
HIGHER-ORDER FUNCTIONS > Functions that accepts other Functions as arguments
and/or return other Functions as output.
*/
// Functions as DATA 
const announceThatIAmDoingImportantWork = () => {
  console.log("I’m doing very important work!");
};
const busy = announceThatIAmDoingImportantWork; //Shorter VAR, easier to work with
busy();
console.log(busy.name); //To recall the original name of our Function

/* Functions as PARAMETERS > functions that get passed in as PARAMS and invoked are
CALLBACK FUNCTIONS because they get called during the execution of the HIGHER-ORDER function. */
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
}/*
This is a HIGHER-ORDER FUNC that takes a FUNC as an argument (funcParameter),
saves a starting time, invokes the CALLBACK FUNC, records the time after the FUNC
was called, and returns the time the FUNC took to run by subtracting the starting
time from the ending time
*/
const addOneToOne = () => 1 + 1;
timeFuncRuntime(addOneToOne); //Invoked the HO FUNC with (addOneToOne) as the argument

