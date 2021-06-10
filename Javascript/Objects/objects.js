/*
Objects can be assigned to VAR. Use {} to designate an OBJECT LITERAL.
We fill an object with unordered data, organized into KEY-VALUE pairs.
*/
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };
/*
fasterShip > Object
'Fuel Type' and color > Key
'Turbo Fuel' and 'silver' > Value
Both make up the properties of the Object
*/

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    'Active Mission': true,
    'Secret Mission': 'Find life on Mars.',
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
// Acessing Object properties with (.) notation
let crewCount = spaceship.numCrew; 
console.log(crewCount); //Output: 5
let planetArray = spaceship.flightPath;
console.log(planetArray); //Output: [flightPath] array

// Acessing Object properties with [] > must be used when keys have numbers, spaces or specials
spaceship['Fuel Type']; //Output: 'Turbo Fuel'

// Acessing the value of a key > always using []
let propName = 'Active Mission'; // Create a VAR assigned to the Key
let isActive = spaceship['Active Mission']; // Another way to create a VAR assigned to the Key
console.log(spaceship[propName]); // Output: true
/*
Property Assignment > using (.) or [] (according to data types) and (=) to add
new key-value pairs to an object or change an existing property.
*/ 
spaceship.color = 'glorious gold'; // Changes the VALUE
spaceship.numEngines = 3; // Adds a new KEY-VALUE pair to the Object
delete spaceship['Secret Mission']; // Deletes that KEY-VALUE pair

