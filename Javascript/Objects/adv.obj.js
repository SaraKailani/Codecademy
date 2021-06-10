/*
The (this) keyword references the CALLING OBJECT which provides its properties.
*/
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  console.log(robot.provideInfo()); //Output: Returns the message above
// IMPORTANT > avoid using arrow functions (=>) when using (this) keyword in a method !!

// Privacy using (_) to reference that the property shouldn't be changed
const wallee = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  wallee._energyLevel = 'high';
  console.log(wallee.recharge()); // Fucks up the log string, since energyLevel is no longer a number
/*
Using GETTERS: a method that get and return internal properties of an Object.
When using GETTERS or SETTERS, properties cannot share the same name as the getter/setter.
One way to avoid this problem is to use _ before the property name.
*/
const machine = {
    _model: '1E78SV2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      };
    }
  };
console.log(machine.energyLevel); // Prints the first (if) statement

// Using SETTERS: a method that reassign values of existing properties of an Object
const starship = {
    _model: '1E78SV12',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
      if (typeof this._numOfSensors === 'number') {
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      } else {
      return 'Pass in a number that is greater than or equal to 0'
      } 
    }
  };
starship.numOfSensors = 100;
console.log(starship.numOfSensors); // Prints: 100

// Destructured Assignment > easy way to extract key-value pairs and save them as variables
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
// Instead of the above, do as follows
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
// Can also be used to grab nested properties
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
