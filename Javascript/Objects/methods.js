/*
When the data stored in an Object is a Function, it's called a METHOD.
PORPERTY is what an object has, while a METHOD is what an object does.
*/
let retreatMessage = 'We no longer wish to conquer your planet.';
const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
// Calling the METHODS created above
alienShip.retreat(); //Output: Prints retreatMessage
alienShip.takeOff(); //Output: Prints takeOff

// Built-in Object Methods available
// Object.keys > method that returns an array of the object's keys
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};
const robotKeys = Object.keys(robot); // Prints ['model', 'mobile', 'sentient', 'armor', 'energyLevel']

// Object.entries > method that returns an array of the object's key-value pairs
const robotEntries = Object.entries(robot);
console.log(robotEntries); // Prints [['model', 'Sal-1000'], ['mobile', 'true'] ... etc]

//Object.assign > method that copies all properties from one or more objects to a target object
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true, robot});
console.log(newRobot); // Prints {laserBlaster: true, voiceRecognition: true, robot: {model: 'SAL-1000' ..}}
